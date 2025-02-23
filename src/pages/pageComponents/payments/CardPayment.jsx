import React, { useState, useEffect } from 'react';
import RegisterTopNavBar from "../RegisterTopNavBar";
import Footer from "../../../components/Footer/Footer";
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_live_51Pw5XrBGiS9eQk8Tb0FeloETbdXR2jWFmAVAIUcyEEju4eCgivGXnYcrWcaLRsxaK6bmT9iynD233cAdlzQtRuA200KjmDdGkj');  // Replace with your publishable key

const CardPayment = () => {
  const { subscriptionName, totalGrossPrice } = useParams();
  const [clientSecret, setClientSecret] = useState(null);

  // Create payment intent on mount
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('https://api.lot24.ma/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: totalGrossPrice,  // Convert to smallest currency unit (cents)
            order_id: subscriptionName,
          }),
        });

        const data = await response.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error("Error fetching client secret:", data.error);
        }
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    createPaymentIntent();
  }, [subscriptionName, totalGrossPrice]);

  const handleSubmit = async (e, stripe, elements) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Confirm the payment with the provided clientSecret and card details
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      alert(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === 'succeeded') {
      alert("Payment successful!");

      // Send payment details to backend for storage
      await savePaymentDetails(paymentIntent, paymentMethod);
    }
  };
  const savePaymentDetails = async (paymentIntent, paymentMethod) => {
    try {
      const response = await fetch('https://api.lot24.ma/api/save-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_intent_id: paymentIntent.id,
          payment_method_id: paymentMethod.id,
          customer_id: paymentMethod.card.checks.cvc_check, // Optional: Store customer ID
          status: paymentIntent.status,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          metadata: paymentIntent.metadata,
          // Additional payment details can go here
        }),
      });

      const data = await response.json();
      if (data.success) {
        console.log('Payment details saved successfully');
      } else {
        console.error('Failed to save payment details:', data.error);
      }
    } catch (error) {
      console.error('Error saving payment details:', error);
    }
  };

  return (
    <>
      <RegisterTopNavBar />
      <div className="bg-gray-100 flex items-center justify-center px-[10px] py-8 md:px-[100px] 2xl:py-[200px]">
        <div className="bg-white rounded-lg p-8 max-w-[600px] shadow-lg mx-auto 2xl:max-w-">
          {/* Payment Info */}
          <div className="mb-6">
            <p className="text-sm font-semibold xl:text-xl">
              Plan Name: {subscriptionName}
            </p>
            <p className="text-sm font-semibold xl:text-xl">
              Total: PLN {totalGrossPrice}
            </p>
          </div>

          {/* Payment Form */}
          {clientSecret && (
            // Wrap the form with Elements provider
            <Elements stripe={stripePromise}>
              <CardPaymentForm clientSecret={clientSecret} />
            </Elements>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

const CardPaymentForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Confirm the payment with the provided clientSecret and card details
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      alert(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === 'succeeded') {
      alert("Payment successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 2xl:space-y-8">
      {/* Card Details */}
      <div>
        <label htmlFor="cardNumber" className="block text-sm 2xl:text-2xl font-semibold mb-2">
          Card number
        </label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#32325d',
                letterSpacing: '0.025em',
                fontFamily: '"Roboto", sans-serif',
                fontSmoothing: 'antialiased',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>

      {/* Terms and Conditions */}
      <div className="text-sm text-gray-600 mt-4 2xl:text-xl 2xl:my-10">
        By providing your card information, you allow Lot 24  to charge
        your card for future payments in accordance with their terms.
      </div>

      {/* Pay Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 focus:outline-none 2xl:py-4 2xl:text-4xl"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CardPayment;

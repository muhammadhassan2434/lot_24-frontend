import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation
import { toast, ToastContainer } from "react-toastify"; // Toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import TopNavbar from "../components/TopNavbar/TopNavbar";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
// import { loginSeller } from "../store/loginSeller";
import { useMutation } from "@tanstack/react-query";
import { sellerLogin } from "../utils/mutations/productMutation";
import { useAuthContext } from "../hooks/useAuthContext";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SellerLogin = () => {
  const navigate = useNavigate();
  const {dispatch} = useAuthContext()

  const {mutate, isPending} = useMutation({
    mutationKey: ["seller-login"],
    mutationFn: sellerLogin,
    onSuccess: async (data) => {
      if (data?.account && data?.token) {
        // Update context state
        dispatch({type: "LOGIN", payload: {userData: data?.account, token: data?.token}})
        toast.success("Login successful!");
        navigate("/seller");
      }
    },
    onError: (err) => {
      console.log(err)
      toast.error(err?.message || "Failed to log in.");
    }
  })
  // const handleSubmit = async (values, { setSubmitting }) => {
  //   try {
  //     const response = await dispatch(
  //       loginSeller({
  //         email: values.email,
  //         password: values.password,
  //       })
  //     ).unwrap();

  //     toast.success("Login successful!");
  //     console.log("Login successful:", response);
  //     navigate("/seller");
  //   } catch (err) {
  //     toast.error(err?.message || "Failed to log in.");
  //     console.error("Login failed:", err);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <>
      <TopNavbar />
      <ToastContainer /> {/* Toastify container to render notifications */}
      <div className="w-full py-[100px] bg-gray-100 flex items-center justify-center">
        <div className="form-can bg-white min-w-[300px] p-4 shadow rounded">
          <h1 className="font-bold text-2xl">Login</h1>

          <Formik
            initialValues={{ email: "", password: "" }} // Initial form values
            validationSchema={validationSchema} // Validation schema
            onSubmit={(values) => mutate(values)} // Submission handler
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4 mt-8">
                {/* Hidden Role Field */}
                <input type="hidden" name="role" value="seller" />

                {/* Email Field */}
                <div>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    className="border text-lg p-2 focus:shadow outline-none w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="border text-lg p-2 focus:shadow outline-none w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="bg-blue-500 py-2 font-extrabold text-white"
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? "Logging in..." : "Log in"}
                </button>
              </Form>
            )}
          </Formik>

          <hr className="my-4" />
          <h2>
            {`Don't you have an account yet?`}{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </h2>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4 font-bold">
        Do you need help? <span className="text-blue-500">See footer</span>
      </div>
      <News />
      <Footer />
    </>
  );
};

export default SellerLogin;

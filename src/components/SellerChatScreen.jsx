import React, { useState, useEffect } from "react";
import axios from "axios";
import Echo from "laravel-echo";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Pusher from "pusher-js";
import { useAuthContext } from "../hooks/useAuthContext";
import { getChatDetails } from "../utils/queries/productQurires";
import { useQuery } from "@tanstack/react-query";

const SellerChatScreen = () => {
  const {id: buyerId, buyerName } = useParams(); // Extract buyerId and buyerName from the URL
  const [buyer, setBuyer] = useState(null); // Extract buyerId from URL
  const [messages, setMessages] = useState([]); // Store messages
  const location = useLocation();
  const { userData } = useAuthContext();

  useEffect(() => {
    // If the buyer's name is not passed, try to fetch it using buyerId
    if (!buyerName) {
      const buyerInfo = getBuyerInfo(buyerId);
      setBuyer(buyerInfo);
    } else {
      const [firstName, lastName] = buyerName.split("-");
      setBuyer({ name: firstName, surname: lastName });
    }
  }, [buyerId, buyerName]);
  // console.log(buyerId)
  // const userData?.id = location.state?.id; // Sent from the sidebar
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token");
  if (!token) {
    navigate("/login");
  }
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatId, setChatId] = useState(null);
  const [chats, setChats] = useState([]);
  const {
    data: chatDetails,
    isLoading: chatDetailsLoading,
    isError: chatDetailsError,
  } = useQuery({
    queryKey: ["seller-chat-details"],
    queryFn: () => getChatDetails(chatId, token),
  });

  // console.log(userData?.id)
  // console.log(chatId)
  // console.log(chatDetails)
  // console.log(chatDetailsError)

  // Initialize Echo
  useEffect(() => {
    window.Pusher = Pusher;
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "18468045d5c2298cb019",
      cluster: "ap2",
      forceTLS: true,
    });

    return () => {
      window.Echo.disconnect(); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    const fetchChatId = async () => {
      try {
        const response = await axios.post("https://api.lot24.ma/api/chat/id", {
          buyerId: buyerId, // Replace with your actual buyerId value
          sellerId: userData?.id, // Send the sellerId from userData
        });
        // console.log(response.data);
        setChatId(response.data.id); // Set the fetched chat ID
      } catch (error) {
        console.error(
          "Error fetching chats:",
          error.response?.data || error.message
        );
      }
    };

    if (buyerId && userData?.id) {
      fetchChatId();
    }
  }, [buyerId, userData?.id]);

  useEffect(() => {
    if (chatDetails?.messages && chatDetails?.messages.length > 0) {
      setMessages(chatDetails.messages);
    }
  }, [chatDetails]);

  useEffect(() => {
    if (!chatId) return; // Exit if chatId is not defined

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `https://api.lot24.ma/api/messages/${chatId}`
        );
        // Access the `messages` property from the first object in the array
        if (response.data && response.data.length > 0) {
          setMessages(response.data[0].messages); // Extract and set the messages array
        } else {
          setMessages([]); // No messages found
        }
      } catch (error) {
        console.error(
          "Error fetching messages:",
          error.response?.data || error.message
        );
      }
    };

    fetchMessages();
  }, [chatId]);

  // fetchMessages()

  // Start a new chat or fetch existing messages
  // useEffect(() => {
  //   if (!userData?.id || buyerId) return;

  //   const startChat = async () => {
  //     try {
  //       const response = await axios.post("http://127.0.0.1:8000/api/createChat", {
  //         buyer_id: buyerId,
  //         seller_id: userData?.id,
  //       });

  //       if (response.data && response.data.id) {
  //         // setChatId(response.data.id); // Store chat ID
  //         fetchMessages(response.data.id); // Fetch messages
  //       }
  //     } catch (error) {
  //       console.error("Error starting chat:", error.response?.data || error.message);
  //     }
  //   };

  //   startChat();
  // }, [userData?.id, buyerId]);

  // Fetch messages for the current chat

  // Real-time Updates with Laravel Echo
  useEffect(() => {
    if (!chatId) return;

    const channel = window.Echo.channel("chat-channel");
    channel.listen(".new-message", (data) => {
      if (data.message.chat_id === chatId) {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    });

    return () => {
      window.Echo.leaveChannel("chat-channel");
    };
  }, [chatId]);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!currentMessage.trim() || !chatId) {
      console.error("Message is empty or chat not started.");
      return;
    }

    try {
      const response = await axios.post("https://api.lot24.ma/api/messages", {
        chat_id: chatId,
        sender_id: userData?.id,
        message: currentMessage,
      });

      setMessages([...messages, response.data]); // Append new message
      setCurrentMessage(""); // Clear input field
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center border-b p-4">
        <h2 className="font-bold text-lg">
          {" "}
          Chat with{" "}
          {buyer ? `${buyer.name} ${buyer.surname}` : `Buyer ID: ${buyerId}`}
        </h2>
      </div>

      <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
  {messages.length > 0 ? (
    messages.map((msg) => (
      <div
        key={msg.id}
        className={`p-2 mb-2 rounded-lg ${
          msg.sender_id === userData?.id
            ? "bg-blue-100 text-right"
            : "bg-gray-200 text-left"
        }`}
      >
        <p className="text-sm font-bold">
          {msg.sender_id === userData?.id
            ? "You"
            : `${buyer?.name} ${buyer?.surname}` || `Buyer ID: ${buyerId}`}
        </p>
        <p>{msg.message}</p>
      </div>
    ))
  ) : (
    <p className="text-gray-500 text-center">No messages yet...</p>
  )}
</div>


      <div className="border-t p-4 flex items-center">
        <input
          type="text"
          value={currentMessage}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage(); // Trigger send message on Enter
            }
          }}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow border rounded-lg p-2 mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SellerChatScreen;

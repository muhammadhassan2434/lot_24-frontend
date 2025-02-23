import React, { useState, useEffect } from "react";
import axios from "axios";
import Echo from "laravel-echo";
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLocation } from "react-router-dom";

const ChatScreen = () => {
  const { id: sellerId } = useParams(); // Extract sellerId from URL
  const [messages, setMessages] = useState([]); // Store messages
  const [currentMessage, setCurrentMessage] = useState(""); // Current message input
  const [chatId, setChatId] = useState(null); // Chat ID
  const { userData } = useAuthContext();
  const location = useLocation();
  const sellerName = location.state?.sellerName || "Unknown Seller";
  // const userData?.id = 2; // Example buyer ID
  // console.log(userData)
  // Initialize Laravel Echo
  useEffect(() => {
    window.Pusher = Pusher;
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "18468045d5c2298cb019", // Replace with your Pusher key
      cluster: "ap2",
      forceTLS: true,
    });
  }, []);

  // Fetch or create the chat on component mount
  useEffect(() => {
    const startChat = async () => {
      try {
        const response = await axios.post(
          "https://api.lot24.ma/api/createChat",
          {
            buyer_id: userData?.id,
            seller_id: sellerId,
          }
        );

        if (response.data && response.data.id) {
          setChatId(response.data.id); // Set chat ID
          fetchMessages(response.data.id); // Fetch initial messages
        }
      } catch (error) {
        console.error(
          "Error starting chat:",
          error.response?.data || error.message
        );
      }
    };

    startChat();
  }, [sellerId]);

  // Fetch messages
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

  // Real-time Listener with Laravel Echo
  useEffect(() => {
    if (!chatId) return;

    const channel = window.Echo.channel("chat-channel");

    channel.listen(".new-message", (data) => {
      if (data.message.chat_id === chatId) {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    });

    // Cleanup subscription on component unmount
    return () => {
      window.Echo.leave("chat-channel");
    };
  }, [chatId]);

  // Send a message
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
        <h2 className="font-bold text-lg">Chat with Seller: {sellerName}</h2>
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
                {msg.sender_id === userData?.id ? "You" : sellerName}{" "}
                {/* Display the seller's name */}
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

export default ChatScreen;

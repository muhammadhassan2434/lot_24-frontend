import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useAuthContext } from "../hooks/useAuthContext";
import { useQuery } from "@tanstack/react-query";
import { getChatDetails } from "../utils/queries/productQurires";
import WhatsAppButton from "./WhatsAppButton";

export const SellerChat = () => {
  const location = useLocation();
  // const userData?.id = location.state?.id; // Sent from the sidebar
  const navigate = useNavigate();
  const token = localStorage.getItem('auth_token')
  if(!token){
    navigate('/login')
  }
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatId, setChatId] = useState(null);
  const [chats, setChats] = useState([]);
  const [info , setInfo ] = useState([]);
  // console.log(info)
  const {data:chatDetails, isLoading:chatDetailsLoading, isError:chatDetailsError} = useQuery({
    queryKey: ['seller-chat-details'],
    queryFn: () => getChatDetails(chatId, token)
  })
  const [messages, setMessages] = useState([]);
  
  const {userData} = useAuthContext();
  // console.log(userData)
  console.log(chatDetails)
  
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
        const response = await axios.get(
          `https://api.lot24.ma/api/get/chats/id/${userData?.id}`
        );
        console.log(response.data);
        
        // Store chats and buyer accounts in state
        setChats(response.data.chats);
        setInfo(response.data.buyer_accounts); // Store buyer accounts
      } catch (error) {
        console.error("Error fetching chats:", error.response?.data || error.message);
      }
    };
  
    if (userData?.id) {
      fetchChatId();
    }
  }, [userData?.id]);
  


useEffect(() =>{  
  if(chatDetails?.messages && chatDetails?.messages.length > 0){
    setMessages(chatDetails.messages)
  }

} , [chatDetails])

  // Start a new chat or fetch existing messages
  useEffect(() => {
    if (!userData?.id || !chatDetails?.buyer_id) return;

    const startChat = async () => {
      try {
        const response = await axios.post("https://api.lot24.ma/api/createChat", {
          buyer_id: chatDetails?.buyer_id,
          seller_id: userData?.id,
        });

        if (response.data && response.data.id) {
          // setChatId(response.data.id); // Store chat ID
          fetchMessages(response.data.id); // Fetch messages
        }
      } catch (error) {
        console.error("Error starting chat:", error.response?.data || error.message);
      }
    };

    startChat();
  }, [userData?.id, chatDetails?.buyer_id]);

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
      console.error("Error sending message:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
      try {
        const response =  axios.get(
          `https://api.lot24.ma/api/get/account/info/${chatDetails?.buyer_id}`
        );
        // console.log(response.data)
        setInfo(response.data.name)
      } catch (error) {
        console.error("Error fetching chats:", error.response?.data || error.message);
      }

  }, [chatDetails?.buyer_id]);

  const getBuyerInfo = (buyerId) => {
    return info.find((account) => account.id === buyerId);
  };

  // Open a specific chat by navigating to the seller's chat page
  const openChat = (chat) => {
    // Find buyer's information based on buyer_id
    const buyer = getBuyerInfo(chat?.buyer_id);
  
    // If buyer information is found, include the buyer's name in the URL
    if (buyer) {
      navigate(`/seller/chat/${chat?.buyer_id}/${buyer?.name}-${buyer?.surname}`);
    } else {
      // If no buyer information, just navigate with the buyer_id
      navigate(`/seller/chat/${chat?.buyer_id}`);
    }
  };
  

  return (
    <div className="flex h-screen w-full">
      <WhatsAppButton/>
      {/* Sidebar Section */}
      <div className="w-1/3 border-r p-4">
        <h2 className="font-bold text-lg mb-4">Active Chats</h2>
        <ul className="flex flex-col gap-2">
      {chats.length > 0 ? (
        chats.map((chat) => {
          const buyer = getBuyerInfo(chat.buyer_id); // Get buyer details
          return (
            <li
              key={chat.id}
              onClick={() => openChat(chat)}
              className={`flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 ${
                chat?.buyer_id ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              <img
                src="https://via.placeholder.com/40"
                alt={`Buyer ${chat.buyer_id}`}
                className="w-10 h-10 rounded-full"
              />
              <span>Chat with {buyer ? `${buyer.name} ${buyer.surname}` : `Buyer ID: ${chat.buyer_id}`}</span>
            </li>
          );
        })
      ) : (
        <p className="text-gray-500">No active chats found.</p>
      )}
    </ul>
      </div>

      {/* Chat Screen Section */}
      {/* <div className="w-2/3 flex flex-col">
        {userData?.id ? (
          <>
            <div className="flex items-center border-b p-4">
              <h2 className="font-bold text-lg ml-4">
                Chat with Buyer: {chatDetails?.name}
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
                      {msg.sender_id === userData?.id ? "You" : `Buyer ID: ${chatDetails?.buyer_id}`}
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
          </>
        ) : (
          <p className="text-center text-gray-500 mt-8">Select a user to start chatting.</p>
        )}
      </div> */}
    </div>
  );
};

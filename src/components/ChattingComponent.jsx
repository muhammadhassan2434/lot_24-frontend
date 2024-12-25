import React, { useState, useEffect } from "react";
import axios from "axios";
import Echo from "laravel-echo";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Pusher from "pusher-js";
import { useAuthContext } from "../hooks/useAuthContext";

const ChattingComponent = () => {
  const { id: sellerId } = useParams();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  // const [getAccountInfo, setAccountInfo] = useState(null);
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  const {userData} = useAuthContext()
  console.log(chats)
  
  // const userData?.id = 2; // Example buyer ID
  // Setup Laravel Echo
  useEffect(() => {
    window.Pusher = Pusher;
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "53d173aa395db1ed5052",
      cluster: "mt1",
      forceTLS: true,
    });
  }, []);

  // Fetch chat list for the buyer
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          `https://api.lot24.ma/api/buyer/chats/${userData?.id}`
        );
        setChats(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error.response?.data || error.message);
      }
    };

    fetchChats();
  }, [userData?.id]);
  
  // useEffect(() => {
  //   const fetchChats = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://127.0.0.1:8000/api/buyer/chats/${userData?.id}`
  //       );
  //       setChats(response.data);
  //     } catch (error) {
  //       console.error("Error fetching chats:", error.response?.data || error.message);
  //     }
  //   };

  //   fetchChats();
  // }, [userData?.id]);
  
  // useEffect(() => {
  //   const getInfo = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://127.0.0.1:8000/api/get/account/info/${userData?.id}`
  //       );

  //       // console.log(response.data)
  //       setAccountInfo(response.data);
  //     } catch (error) {
  //       console.error("Error fetching chats:", error.response?.data || error.message);
  //     }
  //   };

  //   getInfo();
  // }, [userData?.id]);

  // Start or fetch chat messages
  useEffect(() => {
    if (!sellerId) return;

    const startChat = async () => {
      try {
        const response = await axios.post("https://api.lot24.ma/api/createChat", {
          buyer_id: userData?.id,
          seller_id: sellerId,
        });

        if (response.data && response.data.id) {
          setChatId(response.data.id); // Store chat ID
          fetchMessages(response.data.id); // Fetch initial messages
        }
      } catch (error) {
        console.error("Error starting chat:", error.response?.data || error.message);
      }
    };

    startChat();
  }, [sellerId]);

  // Fetch messages for the current chat
  const fetchMessages = async (chatId) => {
    try {
      const response = await axios.get(
        `https://api.lot24.ma/api/messages/${chatId}`
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error.response?.data || error.message);
    }
  };

  // Laravel Echo Real-time Listener
  useEffect(() => {
    if (!chatId) return;

    const channel = window.Echo.channel("chat-channel");

    channel.listen(".new-message", (data) => {
      if (data.message.chat_id === chatId) {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    });

    return () => {
      window.Echo.leave("chat-channel");
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

      setMessages([...messages, response.data]);
      setCurrentMessage(""); // Clear input field
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error.message);
    }
  };

  // Navigate to a selected chat
  const openChat = (chat) => {
    navigate(`/chat/${chat.seller_id}`);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/3 border-r p-4">
        <h2 className="font-bold text-lg mb-4">Users</h2>
        <ul className="flex flex-col gap-2">
          {chats.length > 0 ? (
            chats.map((chat) => (
              <li
                key={chat.id}
                onClick={() => openChat(chat)}
                className={`flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 ${
                  chat.seller_id.toString() === sellerId ? "bg-gray-300" : "bg-gray-200"
                }`}
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt={`Seller ${chat.seller_id}`}
                  className="w-10 h-10 rounded-full"
                />
                <span>Chat with Seller ID: {chat.seller_id}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No active chats found.</p>
          )}
        </ul>
      </div>

      <div className="w-2/3 flex flex-col">
        {sellerId ? (
          <>
            <div className="flex items-center border-b p-4">
              <h2 className="font-bold text-lg ml-4">Chat with Seller ID: {sellerId}</h2>
            </div>

            <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-2 mb-2 rounded-lg ${
                      msg.sender_id === userData?.id ? "bg-blue-100 text-right" : "bg-gray-200 text-left"
                    }`}
                  >
                    <p className="text-sm font-bold">
                      {msg.sender_id === userData?.id ? "You" : `Seller ID: ${sellerId}`}
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
                    handleSendMessage();
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
      </div>
    </div>
  );
};

export default ChattingComponent;

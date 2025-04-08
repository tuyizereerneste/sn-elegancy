import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Authentication token not found.");
        setLoading(false);
        return;
      }

      try {
        interface MessagesResponse {
          contactMessages: ContactMessage[];
        }

        const response = await axios.get<MessagesResponse>("http://localhost:3000/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Corrected key to "contactMessages"
        if (response.data && Array.isArray(response.data.contactMessages)) {
          setMessages(response.data.contactMessages);
        } else {
          setError("No messages found or data format is incorrect.");
        }
      } catch (err) {
        setError("Failed to fetch messages.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      {loading && <p>Loading messages...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* List of Messages */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {messages.length > 0 ? (
          messages.map((message) => (
            <Link to={`/dashboard/messages/${message.id}`} key={message.id}>
              <div className="border rounded-lg p-4 shadow hover:bg-gray-50 transition">
                <h2 className="text-xl font-semibold">{message.name}</h2>
                <p className="text-gray-700">{message.message.substring(0, 50)}...</p>
                <p className="text-gray-500 text-sm">{message.email}</p>
              </div>
            </Link>
          ))
        ) : (
          !loading && <p>No messages available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
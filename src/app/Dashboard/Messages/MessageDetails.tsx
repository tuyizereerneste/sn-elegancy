import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

const MessageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState<ContactMessage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Authentication token not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get<ContactMessage>(`http://localhost:3000/message/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessage(response.data);
      } catch (err) {
        setError("Failed to fetch message.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMessage();
  }, [id]);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized. Please log in again.");
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/message/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/dashboard/messages");
    } catch (err) {
      console.error("Failed to delete message:", err);
      alert("Failed to delete message.");
    }
  };

  if (loading) return <div className="p-6">Loading message...</div>;
  if (error || !message) return <div className="p-6 text-red-500">{error || "Message not found."}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{message.name}</h1>
      <p className="mb-2 text-gray-600">{message.email} | {message.phone}</p>
      <p className="mb-4">{message.message}</p>
      <div className="text-sm text-gray-500 mb-6">
        Sent on: {new Date(message.createdAt).toLocaleString()}
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageDetails;
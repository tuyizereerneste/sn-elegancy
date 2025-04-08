import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import CreateTestimonyForm from "./CreateTestimonyForm";
import { Link } from "react-router-dom";
import axios from "axios";

interface Testimonial {
  id: string;
  image?: string;
  name: string;
  role: string;
  message: string;
  work?: string;
}

const Testimonials: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await axios.get<{ testimony: Testimonial[] }>("http://localhost:3000/testimonies");
      setTestimonials(res.data.testimony);
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
      setError("Failed to load testimonials.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-6 h-6 mr-2" />
          Create Testimonial
        </button>
      </div>

      {isOpen && (
        <CreateTestimonyForm
          onClose={() => {
            setIsOpen(false);
            fetchTestimonials(); // Refresh after creating
          }}
        />
      )}

      {/* Content */}
      {loading ? (
        <p>Loading testimonials...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : testimonials.length === 0 ? (
        <p>No testimonials available yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Link to={`/dashboard/testimonials/${testimonial.id}`} key={testimonial.id}>
              <div className="border rounded-lg p-4 shadow">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )}
                <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                <p className="text-gray-700">{testimonial.message}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
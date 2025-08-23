"use client";

import { useState } from "react";

export default function AddProductForm() {
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message || "Product added!");
      setForm({ name: "", description: "", price: "", image: "" });
    } catch (err) {
      setMessage("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 min-h-[800px]">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Add New Product
      </h1>

      {/* Toggle Button */}
      <button
        onClick={() => setFormVisible(!formVisible)}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 hover:shadow-lg transition"
      >
        {formVisible ? "Hide Form" : "Add Product"}
      </button>

      {/* Success / Error Message */}
      {message && (
        <p className="mb-4 text-green-600 dark:text-green-400">{message}</p>
      )}

      {/* Form (toggle) */}
      {formVisible && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 hover:shadow-lg transition ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Adding..." : "Submit Product"}
          </button>
        </form>
      )}
    </div>
  );
}

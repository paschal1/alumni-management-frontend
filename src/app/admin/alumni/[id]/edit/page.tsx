'use client';

import { useState, useEffect } from "react";

interface Params {
  params: { id: string };
}

export default function EditAlumni({ params }: Params) {
  const [formData, setFormData] = useState({
    name: "",
    gradYear: "",
    profession: "",
    image: ""
  });

  useEffect(() => {
    // fetch alumni details from API (dummy for now)
    setFormData({
      name: "John Doe",
      gradYear: "2015",
      profession: "Software Engineer",
      image: "/alumni1.jpg"
    });
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Alumni updated:", formData);
    // later: send PUT request to backend
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Alumni</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 rounded w-full" />
        <input type="text" name="gradYear" value={formData.gradYear} onChange={handleChange} className="border p-2 rounded w-full" />
        <input type="text" name="profession" value={formData.profession} onChange={handleChange} className="border p-2 rounded w-full" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} className="border p-2 rounded w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}

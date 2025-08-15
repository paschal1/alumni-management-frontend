'use client';

import { useState } from "react";

export default function AddAlumni() {
  const [formData, setFormData] = useState({
    name: "",
    gradYear: "",
    profession: "",
    image: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Alumni added:", formData);
    // later: send POST request to backend
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Alumni</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded w-full" />
        <input type="text" name="gradYear" placeholder="Graduation Year" onChange={handleChange} className="border p-2 rounded w-full" />
        <input type="text" name="profession" placeholder="Profession" onChange={handleChange} className="border p-2 rounded w-full" />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} className="border p-2 rounded w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}

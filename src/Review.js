import React from "react";
import { Star } from "lucide-react";

export default function Review({ name, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Star className="text-yellow-400 mx-auto mb-2" />
      <p className="italic mb-4">"{text}"</p>
      <p className="font-semibold">- {name}</p>
    </div>
  );
}

import React from "react";

export default function PropertyCard({ property }) {
  return (
    <div className="border p-4 border-gray-300 rounded-xl hover:bg-red-100 hover:border-red-500 hover:shadow-md transition-all">
      <div className="flex pb-4">
        <div className="flex-1 font-bold text-gray-900 text-2xl">
          {property.name}
        </div>
        <button className="bg-red-500 text-red-100 rounded-2xl px-4 max-h-min hover:bg-green-500 hover:shadow-xl hover:text-white transition-all">
          Book Now
        </button>
      </div>
      <div>{property.description}</div>
      <div className="font-semibold gap-4">
        <div> Bathrooms: {property.bathrooms}</div>
        <div></div>
      </div>
    </div>
  );
}

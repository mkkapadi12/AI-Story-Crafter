import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-start gap-4">
        <div className="bg-[#f8f9fa] p-3 rounded-lg">{icon}</div>
        <div>
          <h3 className="font-semibold text-[#2B2B2B] mb-2">{title}</h3>
          <p className="text-sm text-[#404040]">{description}</p>
        </div>
      </div>
    </div>
  );
}

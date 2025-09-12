import React from "react";

interface ContestCardProps {
  title: string;
  posted: string;
  description: string;
  author: string;
  image?: string;
  alt?: string;
}

const ContestCard: React.FC<ContestCardProps> = ({
  title,
  posted,
  description,
  author,
  image,
  alt,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6 shadow-sm">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>

      {/* Posted time */}
      <div className="text-sm text-gray-500 mb-2">📅 Posted on {posted}</div>

      {/* Description */}
      <pre className="whitespace-pre-wrap text-base text-gray-800">
        {description}
      </pre>

      {/* Optional image */}
      {image && (
        <figure className="flex justify-center my-4">
          <img
            src={image}
            alt={alt || "contest image"}
            className="w-3/5 rounded-md shadow-md"
          />
        </figure>
      )}

      {/* Author + posted time */}
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>👤 {author}</span>
        <span>🕒 {posted}</span>
      </div>
    </div>
  );
};

export default ContestCard;

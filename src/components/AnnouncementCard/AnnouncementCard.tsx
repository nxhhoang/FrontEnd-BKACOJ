import React from "react";
import Linkify from "react-linkify";

interface AnnouncementCardProps {
  title: string;
  posted: string;
  description: React.ReactNode;
  author?: string;
  image?: string;
  alt?: string;
  link?: string;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  title,
  posted,
  description,
  author,
  image,
  alt,
  link,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6 shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-bold text-orange-600 mb-2">{title}</h2>

      {/* Posted time */}
      <div className="text-sm text-gray-500 mb-4">📅 {posted}</div>

      {/* Description */}
      <Linkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <a
            href={decoratedHref}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {decoratedText}
          </a>
        )}
      >

      <pre className="whitespace-pre-wrap text-base text-gray-800 leading-relaxed">
        {description}
      </pre>
      </Linkify>

      {/* Optional image */}
      {image && (
        <figure className="flex justify-center my-4">
          <img
            src={image}
            alt={alt || "announcement image"}
            className="w-3/5 rounded-md shadow-md"
          />
        </figure>
      )}

      {/* Optional link */}
      {link && (
        <div className="mt-4 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg shadow transition"
          >
            Form đăng ký
          </a>
        </div>
      )}

      {/* Author */}
      {author && (
        <div className="mt-4 text-sm text-gray-600 text-right">
          👤 {author}
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard;

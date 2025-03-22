"use client"
import React from 'react'
import Image from 'next/image';

interface Comment {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}

const comments: Comment[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Senior Partner',
    content: 'Our firm is dedicated to providing exceptional legal services to all our clients with integrity and professionalism.',
    image: 'https://res.cloudinary.com/dcdivbkwd/image/upload/v1728845127/samples/man-portrait.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Associate Attorney',
    content: 'Working at this firm has been an incredible opportunity to grow professionally while making a real difference in our clients\' lives.',
    image: 'https://res.cloudinary.com/dcdivbkwd/image/upload/v1728845127/samples/man-portrait.jpg',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Managing Partner',
    content: 'We\'ve built our reputation on trust and results. Our team is committed to excellence in everything we do.',
    image: 'https://res.cloudinary.com/dcdivbkwd/image/upload/v1728845127/samples/man-portrait.jpg',
  },
  // Add more comments as needed
];

export default function Comments() {
  return (
    <section id="comments-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Team Says</h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Slider container with infinite animation */}
          <div className="flex animate-[slide_25s_linear_infinite] hover:pause">
            {/* First set of comments */}
            {comments.map((comment) => (
              <div key={comment.id} className="flex-shrink-0 w-72 md:w-80 bg-white p-6 rounded-lg shadow-md mx-4">
                <div className="relative">
                  {/* Large opening quote */}
                  <span className="absolute -top-6 -left-2 text-6xl text-gray-300 font-serif leading-none">&ldquo;</span>
                  {/* Comment text with large first letter */}
                  <p className="text-gray-600 italic mb-4 pt-4 pl-6 relative first-letter:text-3xl first-letter:font-bold first-letter:text-gray-800 first-letter:mr-1">{comment.content}</p>
                </div>
                <div className="flex items-center">
                  {comment.image && (
                    <Image 
                      src={comment.image} 
                      alt={comment.name} 
                      width={48}
                      height={48}
                      className="rounded-full mr-4 object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-bold">{comment.name}</h4>
                    <p className="text-sm text-gray-500">{comment.role}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate comments to create the infinite effect */}
            {comments.map((comment) => (
              <div key={`duplicate-${comment.id}`} className="flex-shrink-0 w-72 md:w-80 bg-white p-6 rounded-lg shadow-md mx-4">
                <div className="relative">
                  <span className="absolute -top-6 -left-2 text-6xl text-gray-300 font-serif leading-none">&ldquo;</span>
                  <p className="text-gray-600 italic mb-4 pt-4 pl-6 relative first-letter:text-3xl first-letter:font-bold first-letter:text-gray-800 first-letter:mr-1">{comment.content}</p>
                </div>
                <div className="flex items-center">
                  {comment.image && (
                    <Image 
                      src={comment.image} 
                      alt={comment.name} 
                      width={48}
                      height={48}
                      className="rounded-full mr-4 object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-bold">{comment.name}</h4>
                    <p className="text-sm text-gray-500">{comment.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Add the custom animation */}
        <style jsx global>{`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .hover\:pause:hover {
            animation-play-state: paused;
          }
                  .hover\\:pause:hover {
              animation-play-state: paused;
              }
              /* Add enlargement on hover effect */
              .flex-shrink-0 {
              transition: transform 0.3s ease;
              }
              .flex-shrink-0:hover {
              transform: scale(1.05);
              z-index: 10;
              box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
              }
        `}</style>
      </div>
    </section>
  )
}

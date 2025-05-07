
"use client"
import { useState } from 'react';
import { MdOutlineStarOutline } from "react-icons/md";

export default function Rating() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const ratingOptions = [1, 2, 3, 4, 5];
  
  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    setError('');
  };
  
  const handleSubmit = () => {
    if (selectedRating === null) {
      setError('Please select a rating before submitting');
      return;
    }
    
    setIsSubmitted(true);
  };
  
  const handleReturnToRating = () => {
    setIsSubmitted(false);
    setSelectedRating(null);
  };
  
  // Function to render stars based on rating
  const renderStars = (count) => {
    return (
      <div className="flex gap-3 justify-start">
        {[...Array(count)].map((_, index) => (
          <div 
            key={index}
            className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center"
          >
            <MdOutlineStarOutline className='text-orange-500' />
          </div>
        ))}
      </div>
    );
  };
  
  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full flex flex-col items-center">
          <div className="text-orange-500 mb-4 flex justify-center w-full">
            {renderStars(selectedRating)}
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
          <p className="text-center text-gray-400 mb-6">
            You selected {selectedRating} out of 5. Your feedback helps us improve our service.
          </p>
          <button 
            onClick={handleReturnToRating}
            className="text-sm text-gray-400 underline hover:text-white transition-colors"
          >
            Rate again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-start mb-6">
          <div className="p-3 flex justify-center items-center">
            {selectedRating ? renderStars(selectedRating) : (
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                <MdOutlineStarOutline className='' />
              </div>
            )}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">How did we do?</h2>
        <p className="text-gray-400 mb-6">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.
        </p>
        
        <div  className="flex justify-between mb-6"  >
          {ratingOptions.map((rating) => (
            <button
              key={rating}
              className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors ${
                selectedRating === rating 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
              }`}
              onClick={() => handleRatingSelect(rating)}
              aria-checked={selectedRating === rating}
              aria-label={`Rate ${rating} out of 5 stars`}
            >
              {rating}
            </button>
          ))}
        </div>
        
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center" >
            {error}
          </div>
        )}
        
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-bold transition-colors "
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}











// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

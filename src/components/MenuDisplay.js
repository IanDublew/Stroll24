import React, { useRef } from 'react';

const MenuDisplay = ({ menuImages }) => {
  const imageRef = useRef(null); // Reference to the image container

  const toggleFullScreen = (e) => {
    const target = e.currentTarget; // Get the clicked image container

    // If the browser is already in full-screen mode, exit it
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // Otherwise, request full-screen mode
      target.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  return (
    <div className="my-8 w-full max-w-4xl mx-auto px-4">
      {/* Category Label */}
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Menu Items</h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {menuImages.map((image, index) => (
          <div
            key={index}
            className="relative image-container cursor-pointer" // Added cursor pointer
            onClick={toggleFullScreen} // Add the click handler
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-md object-cover"
              ref={imageRef}
            />
            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
              {image.category}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Style */}
      <style jsx>{`
        @media screen and (fullscreen) {
          img {
            width: 100vw; /* Full width of the viewport */
            height: auto; /* Maintain aspect ratio */
            max-height: 100vh; /* Limit height to viewport */
            object-fit: contain; /* Ensures the image fits within the container without cropping */
            position: fixed; /* Keep the image fixed in place */
            top: 0; /* Align to the top of the viewport */
            left: 0; /* Align to the left of the viewport */
            z-index: 1000; /* Make sure it's above other elements */
          }
        }
      `}</style>
    </div>
  );
};

export default MenuDisplay;

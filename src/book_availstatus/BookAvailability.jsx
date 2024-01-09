import React from "react";
const BookAvailability = ({ bookData }) => {
    const isAvailable = bookData && bookData.available;
  
    return (
      <div>
        {isAvailable ? (
          <div style={{ color: 'green', fontWeight: 'bold' }}>
            Book Available:
            <div>
              Title: {bookData.title}
              <br />
              Author: {bookData.author}
              {/* Add more details as needed */}
            </div>
          </div>
        ) : (
          <div style={{ color: 'red', fontWeight: 'bold' }}>
            Book Not Available
          </div>
        )}
      </div>
    );
  };
  
  export default BookAvailability;
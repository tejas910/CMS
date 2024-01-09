import React, { useState } from 'react';
import './BookSearch.css'
const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookData, setBookData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to simulate book search (replace with actual API call)
  const searchBook = () => {
    // Replace this with your actual data fetching logic
    // For demonstration purposes, using a simple hardcoded example
    const availableBooks = [
      {
        title: 'Basic of Networking',
        author: 'S.Chand',
        available: true,
        // Add more details as needed
      },
      // Add more available books as needed
    ];

    const foundBook = availableBooks.find(
      (book) => book.title.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundBook) {
      setBookData(foundBook);
      setShowModal(true);
    } else {
      setBookData(null);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setBookData(null);
    setShowModal(false);
  };

  return (
    <div >
      <h1>Book Search</h1>
      <div className="search-box">
      <input
        type="text"
        placeholder="Enter book title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button  onClick={searchBook}>Search</button>
      </div>
      {bookData && showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div style={{ color: 'green', fontWeight: 'bold' }}>
              Book Available:
              <div>
                Title: {bookData.title}
                <br />
                Author: {bookData.author}
                {/* Add more details as needed */}
              </div>
            </div>
          </div>
        </div>
      )}

      {bookData === null && showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div style={{ color: 'red', fontWeight: 'bold' }}>
              Book Not Available
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSearch;

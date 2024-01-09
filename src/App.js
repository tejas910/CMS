import React from 'react';
// import BookAvailability from './book_availstatus/BookAvailability'; // Make sure to provide the correct path
import BookSearch from './book_availstatus/BookSearch';
import './App.css';
import BookInfo from './book_availstatus/BookInfo';
import BookDes from './book_availstatus/BookDes';
import DataDetailsForm from './book_availstatus/DataDetailsForm';
const App = () => {
  // const bookData = {
  //   title: 'Sample Book',
  //   author: 'John Doe',
  //   available: true, // Change to false to see the "Not Available" message
  //   // Add more details as needed
  // };

  return (
      <>
          <div>
              <DataDetailsForm></DataDetailsForm>
              {/* <BookDes></BookDes> */}
          </div>
      </>
  )
};

export default App;

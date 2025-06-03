import { useEffect, useState } from "react";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/book");
        console.log("data", response);
        setData(response.data.book);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBooks();
  }, []);

  if (error) return <div>Error: {error}</div>;
  return (
    <div className="">
      <div className="card custom-card  flex-column col-auto">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>author</th>
              <th>genre</th>
              <th>publisher</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.publisher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

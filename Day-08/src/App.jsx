import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Use this to store the total number of pages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('+price'); // Default sorting
  const [category, setCategory] = useState(''); // Default category
  const pageSize = 5; // Number of items per page

  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        let countUrl = `/app/v1/products`;
        
        if (category) {
          countUrl += `?category=${category}`;
        }
        
        const countResponse = await axios.get(countUrl);
        const totalCount = countResponse.data.count;

        // Calculate total pages based on total items
        setTotalPages(Math.ceil(totalCount / pageSize));
      } catch (err) {
        console.log("Error fetching total count:", err.message);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `/app/v1/products?limit=${pageSize}&page=${currentPage}&sort=${sortOrder}`; 
       
        if (category) {
          url += `&category=${category}`;
        }
        const response = await axios.get(url);
        
        if (response.data.status === "success") {
          setData(response.data.Data); // Access the Data array
        
        } else {
          throw new Error('Unexpected response structure');
        }
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTotalCount();
    fetchData();

  }, [currentPage, sortOrder, category]);

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>

      <div className=' flex justify-center space-x-12'>
        <label >
          Sort by:
          <select value={sortOrder} onChange={handleSortChange} className='border hover:border-slate-400 p-1 px-2 my-2 rounded-sm ml-2'>
            <option value='+price'>Price (Low to High)</option>
            <option value='-price'>Price (High to Low)</option>
          </select>
        </label>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange} className='border hover:border-slate-400 p-1 my-2 rounded-sm ml-2'>
            <option value=''>All</option>
            <option value='clothing'>clothing</option>
            <option value='furniture'>Furniture</option>
            <option value='footwear'>footwear</option>
            
            {/* Add other categories as needed */}
          </select>
        </label>
      </div>



      <div className='h-36 my-4 bg-red-300 '>

   
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='   py-2'>

        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
          </div>
      )}
         </div>



      <button onClick={handlePrev} disabled={currentPage === 1} className='border hover:border-slate-500 p-1 my-2 rounded-sm ml-2'>Prev</button>
      <button onClick={handleNext} disabled={currentPage === totalPages} className='border hover:border-slate-500 p-1 my-2 rounded-sm ml-2'>Next</button>
    </>
  );
}

export default App;






import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const PER_PAGE = 10;

export default function Pagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/animals', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response) {
          throw new Error('Failed to grab animals');
        }
        const result = await response.json();
        setData(result);
        setTotalPages(Math.ceil(result.length / PER_PAGE));
      } catch (err: any) {
        console.error('Error during log in:', err.message);
      } finally {
        console.log('Did this run');
      }
      
    };

    fetchData();
  }, []);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  function calculateAge(dob: Date) {
  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // If the birth month hasn't occurred yet this year, or if it's the birth month but the day hasn't occurred yet, subtract one year from the age
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

  const indexOfLastItem = currentPage * PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - PER_PAGE;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='container mx-auto p-4'>
      <ul className='list-disc list-inside'>
        {currentData.map((item, index) => (
          <Card key={index} imageUrl={item.image} name={item.name} age={calculateAge(item.dateOfBirth) + 'Years'} gender={item.gender}
        ))}
      </ul>
      <div className='mt-4 flex justify-center'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

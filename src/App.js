import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://backend-tea-managerment-branch-service.onrender.com')
      .then(response => {return response.json()})
      .then(data => {
        console.log("data::::",data); 
        console.log(data);
        setData(data);  // Lưu dữ liệu vào state
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // [] để fetch 1 lần
  // console.log("data::::",data);
  
  return (
    <div className="App">
      fetch data from backend: {data}
      <h1>thực hành phần mềm mã nguồn mở</h1>
    </div>
  );
}

export default App;

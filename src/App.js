import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const [data, setData] = useState();
  useEffect(() => {
     fetch("https://backend-manguonmo.onrender.com/manguonmo")

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data::::", data);
        console.log(data);
        setData(data); // Lưu dữ liệu vào state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
console.log(data)
  return (
    <div className="App">
      <h1>PM1-Cuối kỳ-Hà Tấn Đạt</h1>
    </div>
  );
}
export default App;
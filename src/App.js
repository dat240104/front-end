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
      <h1>thực hành phần mềm mã nguồn mở</h1>
      <div> Dat dh42200460</div>
      <div>asd</div>
          <div>
            <h2>data: {data}</h2>
          </div>
    </div>
  );
}
export default App;
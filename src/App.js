import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const [data, setData] = useState([]);

//   useEffect(() => {
//      fetch("https://backend-tea-managerment-branch-service.onrender.com")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("data::::", data);
//         console.log(data);
//         setData(data); // Lưu dữ liệu vào state
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
// console.log(data)
  return (
    <div className="App">
      <h1>thực hành phần mềm mã nguồn mở</h1>
        fetch data from backend: Branch Service đã kết nối thành công, test sau khi coppy vao project chinh
          <div>
            <h2>Nguyễn Trí Cường</h2>
            <h2>MSSV: DH52200424</h2>
            <h2>Lớp: D22-TH08</h2>
          </div>
            <h1>test lai</h1>
    </div>
  );
}
export default App;

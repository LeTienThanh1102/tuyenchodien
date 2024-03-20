import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./compontents/layout/Layout";
import Ranking from "./compontents/ranking/Ranking";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mail from "./compontents/mail/Mail";
import List from "./compontents/list/List";
import Infor from "./compontents/infor/Infor";
import CauHinh from "./compontents/cauhinh/CauHinh";
import Baocao1 from "./compontents/infor/baocao";
import Login from "./compontents/login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/trangchu" element={<Layout />} />
        <Route path="/mail" element={<Ranking />} />
        <Route path="/list" element={<List />} />
        <Route path="/send" element={<Mail />} />
        <Route path="/baocao" element={<Infor />} />
        <Route path="/cauhinh" element={<CauHinh />} />
        <Route path="/sodien" element={<Baocao1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

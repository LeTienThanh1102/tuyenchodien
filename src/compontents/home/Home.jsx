import { Link } from "react-router-dom";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1 className="header"> Quản lí thanh toán tiền điện </h1>
      </div>
      <div className="home__container">
        <div className="page_caro">
          <img
            src="https://g-pay.vn/asset/admins/upload/images/Hoa/thanh_toan_tien_dien_online1.png"
            alt="logo"
            className="caro-img"
          />
          <div className="button">
            <Link to="/mail" className="login">
            Thông báo hóa đơn tiền nước cho khách hàng qua Mail.
            </Link>
            <Link to="/list" className="login">
            Theo dõi danh sách
            </Link>
            <Link to="/baocao" className="login">
            Xuất báo cáo thống kê
            </Link>
            <Link to="/cauhinh" className="login">
            Cấu hình về giá, bậc, số nước.
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;

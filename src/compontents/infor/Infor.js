
import './Infor.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
function Infor() {
  const navigate=useNavigate();
  return (
    <div className="infor">
        <div className="infor_titile">
          <h2 className="infor_name"> Xem báo cáo thống kê</h2>
        </div>
      <div className="infor_container">
            <button type="button" class="btn btn-primary btn-button" onClick={()=>navigate('/sodien')}>Báo cáo thống kê số lượng điện sử dụng của khách hàng</button>
            <button type="button" class="btn btn-primary btn-button">Báo cáo thống kê doanh thu theo từng hộ</button>
            <button type="button" class="btn btn-primary btn-button">Báo cáo thống kê số lượng hộ sử dụng dịch vụ</button>
            <button type="button" class="btn btn-primary btn-button">Báo cáo thống kê số lượng còn nợ tiền dịch vụ</button>
      </div>
    </div>
  );
}

export default Infor;

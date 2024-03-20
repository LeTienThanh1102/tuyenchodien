
import './ranking.scss';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Ranking() {
  const navigate=useNavigate();
  return (
    <div className="ranking">
        <div className="ranking_titile">
          <h2 className="ranking_name"> Gửi Mail thông báo cho khách hàng</h2>
        </div>
        
        <div className='selection'>
          <Form.Select aria-label="Default select example">
            <option>Tỉnh/Thành phố</option>
            <option value="1">Hà Nội</option>
          </Form.Select>
          <Form.Select className='selection-item' aria-label="Default select example">
            <option>Quận/ Huyện</option>
            <option value="1">Ba Vì</option>
            <option value="2">Hà Đông</option>
            <option value="3">Cầu Giấy</option>
          </Form.Select>
          <Form.Select className='selection-item' aria-label="Default select example">
            <option>Phường/ Xã</option>
            <option value="1">Kim Giang</option>
            <option value="2">Văn quán</option>
            <option value="3">Hà Trì</option>
          </Form.Select>
          <Form.Select className='selection-item' aria-label="Default select example">
            <option>Đường/ Thôn</option>
            <option value="1">Mộ Lao</option>
            <option value="2">Tây Sơn</option>
            <option value="3">Kim Đồng</option>
          </Form.Select>  
        </div>
        <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
             <Button variant="danger outline-success">Search</Button>
          </Form>
      <div className="ranking_container">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên khách hàng</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Mã số thuế</th>
              <th><label>
                  <input type="checkbox" className="check" id="checkAll" /> 
                </label></th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>1</td>
              <td>Nguyễn Văn Tuyên</td>
              <td>282 Kim Giang, Thanh Xuân, Hà Nội</td>
              <td>0884859696</td>
              <td>tuyentopro@gmail.com</td>
              <td>03586967869697</td>
              <td><div className="form-check">
                  <input className="form-check-input check" type="checkbox" value="" id="flexCheckDefault" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-warning send_mail" onClick={()=> {navigate('/send')}}>Gửi Mail</button>
      </div>
    </div>
  );
}

export default Ranking;

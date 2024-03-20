
import '../ranking/ranking.scss';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function List() {
  const navigate=useNavigate();
  return (
    <div className="ranking">
        <div className="ranking_titile">
          <h2 className="ranking_name"> Theo dõi danh sách khách hàng</h2>
        </div>
        
        <div className='selection'>
          <Form.Select aria-label="Default select example">
            <option>Tỉnh/Thành phố</option>
            <option value="1">Hà Nội</option>
            <option value="2">Hồ Chí Minh</option>
            <option value="3">Đà Nẵng</option>
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
            <option>Thôn/ Xóm/ Tổ</option>
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
             <Form.Select className='selection-item' aria-label="Default select example">
                    <option className='option-item'>Trạng thái</option>
                    <option value="2" className='option-item'>Chưa đóng tiền</option>
                    <option value="3" className='option-item'>Đã đóng</option>
          </Form.Select>  
          </Form>
      <div className="ranking_container">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Mã khách hàng</th>
              <th scope="col">Tên khách hàng</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Mã số thuế</th>
              <th scope="col">Trạng thái</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>1</td>
              <td>GLT067696759</td>
              <td>Nguyễn Văn Tuyên</td>
              <td>282 Kim Giang, Thanh Xuân, Hà Nội</td>
              <td>0884859696</td>
              <td>tuyentopro@gmail.com</td>
              <td>03586967869697</td>
              <td>Chưa đóng tiền</td>

              <td>
                <button className="btn btn-warning" onClick={()=> {navigate('/send')}}>Nhắc nhở</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className='send_mail'> Nhắc nhở</button>
      </div>
    </div>
  );
}

export default List;

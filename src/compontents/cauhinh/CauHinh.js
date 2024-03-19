
import './Cauhinh.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
function CauHinh() {
    const kaka=[
        { id:1,
            tu: 0,
            den: 50,
            gia: 1678

        },
        { id:1,
            tu: 0,
            den: 50,
            gia: 1678

        },
        { id:2,
            tu: 51,
            den: 100,
            gia: 1734

        },
        { id:3,
            tu: 101,
            den: 200,
            gia: 2914

        },{ id:4,
            tu: 201,
            den: 300,
            gia: 1678

        },{ id:5,
            tu: 301,
            den: 5000,
            gia: 1678

        }
]
  const navigate=useNavigate();
  return (
    <div className="cauhinh">
        <div className="cauhinh_titile">
          <h2 className="cauhinh_name"> Cấu hình</h2>
        </div>
        <div>
          <button type="button" class=" btn-cauhinh">Hộ nghèo</button>
          <button type="button" class=" btn-cauhinh  btn-danger">Hộ cư dân</button>
          <button type="button" class="btn-cauhinh">Cơ quan hành chính</button>
          <button type="button" class="btn-cauhinh">Hoạt động kinh doanh</button>
          <button type="button" class="btn-cauhinh">Kinh doanh dịch vụ</button>
        </div>
      <div className="cauhinh_container">
        <table className="table table-cauhinh ">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Từ</th>
              <th scope="col">Đến</th>
              <th scope="col">Đơn giá</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {kaka.map((item, index)=>(
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.tu}</td>
              <td>{item.den}</td>
              <td>{item.gia}</td>
              <td>x</td>

            </tr>
            ))}
          </tbody>
        </table>
        <button className='save'> Nhắc nhở</button>
      </div>
    </div>
  );
}

export default CauHinh;

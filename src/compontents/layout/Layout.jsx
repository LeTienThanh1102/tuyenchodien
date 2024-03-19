import Home from "../home/Home";
import "./layout.scss";
function Layout() {
    return ( 
        <div className="layout">
            <div className="back_home">
                <Home />
            </div>
        </div>
     );
}

export default Layout;
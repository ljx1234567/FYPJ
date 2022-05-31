import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/jiaxin">Jiaxin's page</Link>
            </li>
            <li>
                <Link to="/nigel">Nigel's page</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
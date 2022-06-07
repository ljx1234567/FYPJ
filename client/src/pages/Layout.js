import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">NHCS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/jiaxin">Information page</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/nigel">Calling API 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/callingapi2">Calling API 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/callingapi3">Calling API 3</a>
            </li>
          </ul>
        </div>
      </nav> 
      <Outlet />
    </>

    
  )
};

export default Layout;
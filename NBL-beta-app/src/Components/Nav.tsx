import { NavLink } from "react-router-dom";

import IndexOfPages from "../Pages/0_IndexOfPages";

function Nav() {
  return (
    <>
      <div>
        <NavLink to={`/${IndexOfPages.Home().key}`}>{IndexOfPages.Home().title}</NavLink>
      </div>

      <div>
        <NavLink to={`/${IndexOfPages.About().key}`}>{IndexOfPages.About().title}</NavLink>
      </div>

      <div>
        <NavLink to={`/${IndexOfPages.Privacy().key}`}>{IndexOfPages.Privacy().title}</NavLink>
      </div>
    </>
  )
}

export default Nav
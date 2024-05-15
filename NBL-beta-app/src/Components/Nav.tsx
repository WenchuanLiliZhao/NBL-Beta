import { NavLink } from "react-router-dom";

import Index_Pages from "../Pages/0_IndexOfPages";

function Nav() {
  return (
    <>
      <div>
        <NavLink to={`/${Index_Pages.Home().key}`}>{Index_Pages.Home().title}</NavLink>
      </div>

      <div>
        {/* <NavLink to={`/${IndexOfPages.About().key}`}>{IndexOfPages.About().title}</NavLink> */}
      </div>

      <div>
        <NavLink to={`/${Index_Pages.Privacy().key}`}>{Index_Pages.Privacy().title}</NavLink>
      </div>
    </>
  )
}

export default Nav
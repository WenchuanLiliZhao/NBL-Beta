// import { NavLink } from "react-router-dom"
import RootPages from "../../Pages/Root/RootPages"
import "./Nav.scss"
import NavLink2Top from "./NavLink2Top"

export default function Nav() {
  return (<>
    <div className="site-nav">
      <div className="site-nav-container">
        <NavLink2Top to={`/${RootPages.RootPage_Home.info.key}`} className="item">
          {RootPages.RootPage_Home.info.title}
        </NavLink2Top>

        <NavLink2Top to={`/${RootPages.RootPage_Activities.info.key}`} className="item">
          {RootPages.RootPage_Activities.info.title}
        </NavLink2Top>

        <NavLink2Top to={`/${RootPages.RootPage_Stories.info.key}`} className="item">
          {RootPages.RootPage_Stories.info.title}
        </NavLink2Top>

        <NavLink2Top to={`/${RootPages.RootPage_Books.info.key}`} className="item">
          {RootPages.RootPage_Books.info.title}
        </NavLink2Top>

        <NavLink2Top to={`/${RootPages.RootPage_About.info.key}`} className="item">
          {RootPages.RootPage_About.info.title}
        </NavLink2Top>
      </div>
    </div>
  </>)
}
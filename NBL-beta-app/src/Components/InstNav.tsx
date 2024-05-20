import { NavLink } from "react-router-dom"

import "./InstNav.scss"

function InstNav(props: any) {
  const channels = props.channels

  return (<>
    <div className="inst-nav">
      
      <div className="item-bar">
        <div className="logo-bar">
          <div className="nbl-logo">
            <img src="https://i.pinimg.com/564x/9b/86/42/9b86429bc83e9c6bdce983f7f408e010.jpg" alt="nbl-logo" />
          </div>
          {/* <div className="cross">
            <div className="stick a"></div>
            <div className="stick b"></div>
          </div>
          <div className="inst-logo">
            <img src="https://doodleipsum.com/700/flat?i=366f07b78c8218519c32858e70d7e35d" alt="site-logo" />
          </div> */}
        </div>

        {/* 機構中所有的頻道 */}
        <div className="items">
          {Object.values(channels).map((item: any, index: any) => (
            <NavLink className={`item`} to={`/${item().key}`} key={`${item}${index}`}>
              {item().title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="user-bar">
        <div className="avata">
          <img src="https://i.pinimg.com/564x/7d/be/37/7dbe3752a5fa1b1747df3d1147b1d8ca.jpg" alt="" />
        </div>
      </div>
      
    </div>
  </>)
}

export default InstNav
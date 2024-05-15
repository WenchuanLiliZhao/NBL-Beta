import { NavLink } from "react-router-dom"

import "./InsNav.scss"

function InsNav(props: any) {
  const channels = props.channels

  return (<>
    {Object.values(channels).map((item: any, index: any) => (
      <NavLink to={`/${item().key}`} key={`${item}${index}`}>
        <div>
          {item().title}
        </div>
      </NavLink>
    ))}
  </>)
}

export default InsNav
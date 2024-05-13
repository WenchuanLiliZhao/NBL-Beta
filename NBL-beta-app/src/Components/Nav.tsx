import { Link } from "react-router-dom";


function Nav() {
  return (
    <>
      <div>
        <Link to="/home">Home</Link>
      </div>

      <div>
        <Link to="/about">About</Link>
      </div>

      <div>
        <Link to="/aaa">AAA</Link>
      </div>
    </>
  )
}

export default Nav
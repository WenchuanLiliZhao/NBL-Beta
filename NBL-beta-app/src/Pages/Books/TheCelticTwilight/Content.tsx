import { Link } from "react-router-dom";
import EP_000 from "./EPs/EP_000/0_Repo";
import EP_001 from "./EPs/EP_001/0_Repo";
import EP_002 from "./EPs/EP_002/0_Repo";

export default function Content() {
  const test1 = `/${EP_000.info.key}`
  const test2 = `/${EP_001.info.key}`
  const test3 = `/${EP_002.info.key}`

  console.log(test1)
  console.log(test2)
  console.log(test3)

  return (<>
  
    關於這本書⋯⋯

    <p>
      <Link to={`/${EP_000.info.key}`}>EP0</Link>
    </p>

    <p>
      <Link to={`/${EP_001.info.key}`}>EP1</Link>
    </p>

    <p>
      <Link to={`/${EP_002.info.key}`}>EP2</Link>
    </p>
  
  </>)
}
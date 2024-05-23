import { Link } from "react-router-dom"

export default function BookContentLayout(props: any) {
  const info = props.info
  const sample = props.sample

  return (<>
    <p>Book Content Layout...</p>
    <p>{info.brief}</p>
    <p>{sample().title}</p>
    <p><Link to={`/${sample().key}`}>Link</Link></p>
    {props.children}
  </>)
}
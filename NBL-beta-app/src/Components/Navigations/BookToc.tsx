import { Link } from "react-router-dom";
import "./BookToc.scss";

export default function BookToc(props: any) {
  const toc = props.toc

  return (<>
    {Object.values(toc).map((item: any, index: any) => (
      <div className="" key={`${item}${index}`}>
        <Link to={`/${item().key}`}>
          {item().title}
        </Link>
      </div>
    ))}
  </>)
}
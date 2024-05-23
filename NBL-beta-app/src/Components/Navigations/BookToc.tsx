// import { Link } from "react-router-dom";
import "./BookToc.scss";

export default function BookToc(props: any) {
  const toc = props.toc

  return (<>
    <p>==========</p>
    <p>Begin Toc:</p>
    <p>==========</p>
    {Object.values(toc).map((item: any, index: any) => (
      <div className="" key={`${item}${index}`}>
        <a href={`/${item().key}`}>
          {item().title}
        </a>
      </div>
    ))}
    <p>==========</p>
    <p>End Toc:</p>
    <p>==========</p>
  </>)
}
// import { Link } from "react-router-dom";
import "./BookToc.scss";

export default function BookToc(props: any) {
  const toc = props.toc


  return (<>
    {toc.map((part: any, i: any) => (
      <div className="book-parts" key={`${part}${i}`}>
        <div className="part-title">{part.title}</div>

        {part.chapters.map((chapter: any, k: any) => (
          <div className="part-chapters" key={`${chapter}${k}`}>
            <a href={`/${chapter().key}`}>
              - {chapter().title} sss
            </a>
          </div>
        ))}
      </div>
    ))}
    <p>----------</p>
  </>)
}
import "./BookCard.scss"

import { Link } from "react-router-dom";
import Book_The_Lulu from "./Book_The_Lulu";

export default function BookCard(props: any) {
  // all info
  const book = props.book;

  const key = `/${book.key}`
  const title = book.title;
  const authors = book.authors;
  const cover = book.cover;
  // const brief = book.brief;

  return (<>
    <Link to={key} className="book-card">
      <div className="book-card-cover">
        <Book_The_Lulu cover={cover}/>
      </div>
      <div className="book-card-info">
        <div className="book-card-title">
          {title}
        </div>
        <div className="book-card-authors-bar">
          {authors.map((item: any, index: any) => (
            <div className="book-card-author" key={`${item}${index}`}>
              {item.name}
            </div>
          ))}
        </div>
        {/* <div className="book-card-brief">
          {brief}
        </div> */}
      </div>
    </Link>
  </>)
}
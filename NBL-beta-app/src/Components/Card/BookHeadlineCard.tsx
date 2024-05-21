import "./BookHeadlineCard.scss"

import Book_The_Lulu from "./Book_The_Lulu"
import "./BookHeadlineCard.scss"
import { Link } from "react-router-dom";

export default function BookHeadlineCard(props: any) {
  // all info
  const book = props.book;

  const key = `/${book.key}`
  const title = book.title;
  const authors = book.authors;
  const cover = book.cover;
  // const publisher = book.publisher.name;
  const brief = book.brief;

  return (<>
    <Link to={key} className="book-headline-card">
      <div className="book-headline-card-cover">
        <Book_The_Lulu cover={cover}/>
      </div>
      <div className="book-headline-card-info">
        <div className="book-headline-card-authors-bar">
          {authors.map((item: any, index: any) => (
            <div className="book-headline-card-author" key={`${item}${index}`}>
              {item.name}
            </div>
          ))}
          {/* <div className="book-headline-card-publisher">
            {publisher}
          </div> */}
        </div>
        <div className="book-headline-card-title">
          {title}
        </div>
        <div className="book-headline-card-brief">
          {brief}
        </div>
      </div>
    </Link>
  </>)
}
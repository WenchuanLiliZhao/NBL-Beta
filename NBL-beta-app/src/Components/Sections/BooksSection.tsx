import "./BooksSection.scss"

import BookCard from "../Card/BookCard";
import BookHeadlineCard from "../Card/BookHeadlineCard";
import SectionHeader from "../Heading/SectionHeader";

import Index_Books from "../../Pages/DataBase/Books/0_Index"

export default function BooksSection(props: any) {
  const headline = props.headline;

  const books = props.books;

  return (<>
    <div className="books-section">
      <SectionHeader title="推薦圖書" btnLink="" btnText="查看更多" />

      <div className="books-section-body">
        <div className="books-section-headline-container">
          <BookHeadlineCard book={headline}/>
        </div>

        <div className="books-section-list">
          {books.map((item: any, index: any) => (
            <div key={`${item}${index}`}>
              <BookCard book={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  </>)
}
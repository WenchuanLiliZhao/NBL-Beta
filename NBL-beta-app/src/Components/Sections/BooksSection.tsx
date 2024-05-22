import "./BooksSection.scss"

import BookCard from "../Card/BookCard";
import BookHeadlineCard from "../Card/BookHeadlineCard";
import SectionHeader from "../Heading/SectionHeader";

import Index_Books from "../../Pages/DataBase/Books/0_Index"

export default function BooksSection(props: any) {
  const headline = props.headline;
  if (headline != null) {
    console.log(headline);
  }

  return (<>
    <div className="books-section">
      <SectionHeader title="推薦圖書" btnLink="" btnText="查看更多" />

      <div className="books-section-body">
        <div className="books-section-headline-container">
          <BookHeadlineCard book={Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems()}/>
        </div>

        <div className="books-section-list">
          <BookCard book={Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems()}/>
          <BookCard book={Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems()}/>
          <BookCard book={Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems()}/>
          <BookCard book={Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems()}/>
        </div>
      </div>
    </div>
    
  </>)
}
import "./BooksSection.scss"

import BookCard from "../Cards/BookCard";
import SectionHeader from "../Heading/SectionHeader";

export default function BooksSection(props: any) {
  const label = props.label;
  const quote = props.quote;
  const quoteFrom = props.quoteFrom;
  
  const books = props.books;

  return (<>
    <section className="books-section page-section-big">
      <SectionHeader label={label} quote={quote} quoteFrom={quoteFrom} />

      <div className="books-section-body">

        <div className="books-section-list">
          {books.map((item: any, index: any) => (
            <div key={`${item}${index}`}>
              <BookCard book={item}/>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  </>)
}
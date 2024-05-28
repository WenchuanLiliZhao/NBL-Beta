import "./BookPageLayout.scss"

import AudioPlayer4Book from "../ForAudioBooks/AudioPlayer4Book"
import BookTocSideNav from "../Navigations/BookTocSideNav"

export default function BookPageLayout(props: any) {
  
  const book = props.book
  const ep = props.ep

  return (<>
    {ep.audio != null ? (<AudioPlayer4Book src={ep.audio} />) : (<></>)}
    <BookTocSideNav book={book} />
    <div className="book-page">
      <div className="ep-title-section">
          <h1 className="page-title">{ep.title}</h1>
          {ep.authors != null ? (<>
            <div className="authors">
              {ep.authors.map((author: any, i: any) => (
                <span className="author" key={`${author}${i}`}>
                  {i != 0 ? ", " : ""}
                  {author.data.info.title}
                </span>
              ))}
            </div>
          </>) : (<></>)}
        </div>
        <div className="md">{props.children}</div>
    </div>
  </>)
}
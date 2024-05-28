import "./BookPageLayout.scss"

import AudioPlayer4Book from "../ForAudioBooks/AudioPlayer4Book"
import BookTocSideNav from "../Navigations/BookTocSideNav"

export default function BookPageLayout(props: any) {
  
  const book = props.book
  const audio = props.audio

  return (<>
    <BookTocSideNav book={book} />
    <div className="book-page">
    
      {audio != null ? (<AudioPlayer4Book src={audio} />) : (<></>)}
      {props.children}
    </div>
  </>)
}
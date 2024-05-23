import AudioPlayer4Book from "../ForAudioBooks/AudioPlayer4Book";
import BookToc from "../Navigations/BookToc";

export default function AudioBookReadingLayout(props: any) {
  const bookInfo = props.bookInfo;

  return (<>
    <BookToc toc={bookInfo.toc} />
    <AudioPlayer4Book src={props.audio}/>
    {props.children}
  </>)
}
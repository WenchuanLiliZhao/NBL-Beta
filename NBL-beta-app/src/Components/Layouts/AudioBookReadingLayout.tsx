import AudioPlayer4Book from "../ForAudioBooks/AudioPlayer4Book";
import BookToc from "../Navigations/BookToc";

export default function AudioBookReadingLayout(props: any) {
  const loadToc = props.loadToc;

  return (<>
    <BookToc toc={loadToc} />
    <AudioPlayer4Book src={props.audio}/>
    {props.children}
  </>)
}
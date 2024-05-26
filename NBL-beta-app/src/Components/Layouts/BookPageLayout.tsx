import "./BookPageLayout.scss"

import AudioPlayer4Book from "../ForAudioBooks/AudioPlayer4Book"
import BookTocSideNav from "../Navigations/BookTocSideNav"

export default function BookPageLayout(props: any) {
  
  const toc = props.toc
  const audio = props.audio

  return (<>
    <BookTocSideNav toc={toc} />
    {audio != null ? (<AudioPlayer4Book src={audio} />) : (<></>)}
    {props.children}
  </>)
}
import AudioPlayer4Book from "../ForAudioBooks/AudioPlayer4Book";

export default function AudioBookReadingLayout(props: any) {
  const audio = props.audio;

  return (<>
    <AudioPlayer4Book src={audio} />
    {props.children}
  </>)
}
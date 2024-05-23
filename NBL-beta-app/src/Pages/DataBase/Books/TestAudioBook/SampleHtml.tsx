// SampleHTML.tsx
import AudioPlayer from "./Test";


export default function SampleHTMLBook_TestAudioBook() {
  
  return {
    title: "有声书代码测试",
    key: "test-audio-book-sample-html",

    content: (<>
      <div className="container">
        <AudioPlayer />
      </div>
    </>)
  }
}
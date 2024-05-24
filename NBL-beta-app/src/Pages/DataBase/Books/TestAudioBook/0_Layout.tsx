
import AudioBookReadingLayout from "../../../../Components/Layouts/AudioBookReadingLayout";
// import Info from "./Info";
import Toc from "./0_Toc";

export default function Layout(props: any) {

  return (<>
    <AudioBookReadingLayout loadToc={Toc} audio={props.audio}>
      {props.children}

      {/* toc 寫在這個地方，因為並不是所有書都有必要有目錄 */}
      {/* 實在不行最後封裝回去也可以 */}
    </AudioBookReadingLayout>
  </>)
}
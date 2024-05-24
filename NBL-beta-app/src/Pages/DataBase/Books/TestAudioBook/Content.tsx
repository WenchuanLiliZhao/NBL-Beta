import BookContentLayout from "../../../../Components/Layouts/BookContentLayout"
import Info from "./Info"
import Chapters from "./0_Chapters"
import Toc from "./0_Toc"

export default function Content() {
  return (<>
    <BookContentLayout info={Info} chapters={Chapters} toc={Toc}>
      ssssss
      ssss
    </BookContentLayout>
  </>)
}
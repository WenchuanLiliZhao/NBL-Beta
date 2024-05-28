// import BookPageLayout from "../../../Components/Layouts/BookPageLayout";
import BookPageLayout from "../../../Components/Layouts/BookPageLayout"
import Book_TheCelticTwilight from "./0_Repo"


export default function Layout(props: any) {
  return (<>
    <BookPageLayout book={Book_TheCelticTwilight} audio={props.audio}>
      {props.children}
    </BookPageLayout>
  </>)
}
// import BookPageLayout from "../../../Components/Layouts/BookPageLayout";
import BookPageLayout from "../../../Components/Layouts/BookPageLayout"
import Book_Hamlet from "./0_Repo"


export default function Layout(props: any) {
  return (<>
    <BookPageLayout book={Book_Hamlet} ep={props.ep}>
      {props.children}
    </BookPageLayout>
  </>)
}
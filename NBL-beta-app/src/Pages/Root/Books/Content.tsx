import BooksSection from "../../../Components/PageSections/BooksSection";
import PageHeader from "../../../Components/Heading/PageHeader";
import Books from "../../Books/Books";
import RootLayout from "../RootLayout";
import Info from "./Info";


export default function Content() {
  return (<>

    <RootLayout>
      <PageHeader 
        info={Info}
      />

      <BooksSection
        books={[
        Books.Book_Nahan_LuXun,
        Books.Book_Hamlet,
        Books.Book_TheCelticTwilight,
        Books.Book_TheSocialContract,
      ]} />
    </RootLayout>
  
  </>)
}
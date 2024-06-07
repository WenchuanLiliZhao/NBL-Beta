import BooksSection from "../../../Components/PageSections/BooksSection";
import PageHeader from "../../../Components/Heading/PageHeader";
import Books from "../../Books/Books";
import RootLayout from "../RootLayout";


export default function Content() {
  return (<>

    <RootLayout>
      <PageHeader 
        title = "書籍"

        quote = "夜雪初霽，荔子燈明，讀書聲徹，未覺便覺其中，有致知之樂。"

        quoteFrom = "陸游《放翁家訓十首》"
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
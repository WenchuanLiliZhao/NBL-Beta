

import InstHeader from "../../../../../Components/PageSections/InstHeader";
import StoriesSection from "../../../../../Components/PageSections/StoriesSection";
import Stories from "../../Stories/Stories";
import InstInfo from "../../InstInfo";
import RiverwoodLayout from "../../Layout";
import BooksSection from "../../../../../Components/PageSections/BooksSection";
import Books from "../../../../Books/Books";

export default function Content() {
  return (<>
    <RiverwoodLayout>
      <InstHeader instInfo={InstInfo} />
      <StoriesSection
        headline={Stories.NBL_Story1}
        stories={[
          Stories.NBL_Story1,
          Stories.NBL_Story1,
          Stories.NBL_Story1,
        ]}
      />

      <BooksSection
        sectionTitle = "Test"
        btnLink = ""
        bntText = "Read More"

        headline = {Books.Book_Nahan_LuXun}
        books = {[
          Books.Book_TheCelticTwilight,
          Books.Book_TheCelticTwilight,
          Books.Book_TheCelticTwilight,
          Books.Book_TheCelticTwilight,
        ]}
      />
    </RiverwoodLayout>
  </>)
}
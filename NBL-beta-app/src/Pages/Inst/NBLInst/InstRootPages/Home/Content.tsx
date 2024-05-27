

import InstHeader from "../../../../../Components/PageSections/InstHeader";
import StoriesSection from "../../../../../Components/PageSections/StoriesSection";
import Stories from "../../Stories/Stories";
import InstInfo from "../../InstInfo";
import RiverwoodLayout from "../../Layout";
import BooksSection from "../../../../../Components/PageSections/BooksSection";
import Book_TheCelticTwilight from "../../../../Books/TheCelticTwilight/0_Repo";

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

        headline = {Book_TheCelticTwilight}
        books = {[
          Book_TheCelticTwilight,
          Book_TheCelticTwilight,
          Book_TheCelticTwilight,
          Book_TheCelticTwilight,
        ]}
      />
    </RiverwoodLayout>
  </>)
}
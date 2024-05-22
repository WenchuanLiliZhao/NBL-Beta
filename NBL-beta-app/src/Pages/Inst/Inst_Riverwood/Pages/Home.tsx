import InstHeader from "../../../../Components/Sections/InstHeader"
import BooksSection from "../../../../Components/Sections/BooksSection"
import StoriesSection from "../../../../Components/Sections/StoriesSection"
import Repo_Inst_Riverwood from "./0_Repo_Inst_Riverwood_Pages"
import Layout_Inst_Riverwood from "./1_Layout_Inst_Riverwood"
import Index_Books from "../../../DataBase/Books/0_Index"


export default function Inst_Riverwood_Home() {

  return {
    title: "主頁",
    key: `${Repo_Inst_Riverwood.info.key}/home`,

    content: (<>
      <Layout_Inst_Riverwood>
        <InstHeader></InstHeader>
        <StoriesSection />
        <BooksSection
          sectionTitle = {`推薦閱讀`}
          btnLink = ""
          btnText = "查看更多"

          headline = {Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems()}

          books = {[
            Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems(),

            Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems(),

            Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems(),

            Index_Books.Book_DialogueConcerningTheTwoChiefWorldSystems(),
          ]}
        />
      </Layout_Inst_Riverwood>
    </>)
  }
}
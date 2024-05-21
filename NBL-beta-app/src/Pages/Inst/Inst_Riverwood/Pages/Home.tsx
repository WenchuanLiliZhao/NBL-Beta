import InstHeader from "../../../../Components/Layouts/InstHeader"
import TopicSection from "../../../../Components/Sections/TopicSection"
import Repo_Inst_Riverwood from "./0_Repo_Inst_Riverwood_Pages"
import Layout_Inst_Riverwood from "./1_Layout_Inst_Riverwood"


export default function Inst_Riverwood_Home() {
  return {
    title: "主頁",
    key: `${Repo_Inst_Riverwood.info.key}/home`,

    content: (<>
      <Layout_Inst_Riverwood>
        <InstHeader></InstHeader>
        <TopicSection />

        This is Hoooome
      </Layout_Inst_Riverwood>
    </>)
  }
}
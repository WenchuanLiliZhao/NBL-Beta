import Repo_Inst_Riverwood from "./0_Repo_Inst_Riverwood_Pages"
import Layout_Inst_Riverwood from "./1_Layout_Inst_Riverwood"

export default function Inst_Riverwood_AllBooks() {
  return {
    title: "全部圖書",
    key: `${Repo_Inst_Riverwood.info.key}/all-books`,

    content: (<>
      <Layout_Inst_Riverwood>
        全部書籍都在這裡
      </Layout_Inst_Riverwood>
    </>)
  }
}
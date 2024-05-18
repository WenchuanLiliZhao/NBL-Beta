import Repo_Inst_Riverwood from "./0_Repo_Inst_Riverwood_Pages"
import Layout_Inst_Riverwood from "./1_Layout_Inst_Riverwood"


export default function Inst_Riverwood_Home() {
  return {
    title: "主頁",
    key: `${Repo_Inst_Riverwood.info.key}`,

    content: (<>
      <Layout_Inst_Riverwood>
        This is Hoooome
      </Layout_Inst_Riverwood>
    </>)
  }
}
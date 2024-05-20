import Repo_Inst_Riverwood from "./0_Repo_Inst_Riverwood_Pages"
import Layout_Inst_Riverwood from "./1_Layout_Inst_Riverwood"

export default function Inst_Riverwood_Topics() {
  return {
    title: "專題",
    key: `${Repo_Inst_Riverwood.info.key}/topics`,

    content: (<>
      <Layout_Inst_Riverwood>
        所有的話題
      </Layout_Inst_Riverwood>
    </>)
  }
}
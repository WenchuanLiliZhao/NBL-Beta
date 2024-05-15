import Layout_Inst_Riverwood from "./1_Layout_Inst_Riverwood"
export default function Inst_Riverwood_Home() {
  return {
    title: "主頁",
    key: "riverwood",

    content: (<>
      <Layout_Inst_Riverwood>
        This is Hoooome
      </Layout_Inst_Riverwood>
    </>)
  }
}
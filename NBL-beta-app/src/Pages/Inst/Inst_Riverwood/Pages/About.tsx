import Layout_Inst_Riverwood from "./1_Layout_Inst_Riverwood"

export default function Inst_Riverwood_About() {
  return {
    title: "關於",
    key: "riverwood/about",

    content: (<>
      <Layout_Inst_Riverwood>
        This is about
      </Layout_Inst_Riverwood>
    </>)
  }
}
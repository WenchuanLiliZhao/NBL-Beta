import InsPageLayout from "../../../../Components/Layouts/InstPageLayout";
import Repo_Inst_Riverwood from "./0_Repo_Inst_Riverwood_Pages";

export default function Layout_Inst_Riverwood(props: any) {
  return (<>
    <InsPageLayout channels={Repo_Inst_Riverwood.channels}>
      {props.children}
    </InsPageLayout>
  </>)
}
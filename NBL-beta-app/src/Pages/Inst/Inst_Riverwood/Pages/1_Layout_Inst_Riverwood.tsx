import BasicLayout from "../../../../Components/Layouts/1_Basic";
import InsNav from "../../../../Components/InsNav";
import Repo_Inst_Riverwood from "./0_Repo_Inst_Riverwood_Pages";

export default function Inst_Riverwood_Layout(props: any) {
  return (<>
    <BasicLayout>
      <InsNav channels={Repo_Inst_Riverwood.channels} />
      {props.children}
    </BasicLayout>
  </>)
}
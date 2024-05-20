import BasicLayout from "../../../../Components/Layouts/1_Basic";
import InstNav from "../../../../Components/InstNav";
import Repo_Inst_Riverwood from "./0_Repo_Inst_Riverwood_Pages";

export default function Layout_Inst_Riverwood(props: any) {
  return (<>
    <BasicLayout>
      <InstNav channels={Repo_Inst_Riverwood.channels} />
      {props.children}
    </BasicLayout>
  </>)
}
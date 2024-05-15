import BasicLayout from "../../../../Components/Layouts/1_Basic";
import InsNav from "../../../../Components/InsNav";
import Index_Ins_Riverwood_Pages from "./0_Index_Inst_Riverwood_Pages";

export default function Inst_Riverwood_Layout(props: any) {
  return (<>
    <BasicLayout>
      <InsNav channels={Index_Ins_Riverwood_Pages} />
      {props.children}
    </BasicLayout>
  </>)
}
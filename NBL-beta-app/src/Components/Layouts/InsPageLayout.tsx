import InsNav from "../InsNav";
import BasicLayout from "./1_Basic";

import "./InsPageLayout.scss"

export default function InsPageLayout(props: any) {
  return (<>
    <BasicLayout>
      <InsNav channels={props.channels} />
      {props.children}
    </BasicLayout>
  </>)
}
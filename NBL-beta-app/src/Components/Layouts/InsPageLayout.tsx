import InstNav from "../InstNav";
import BasicLayout from "./1_Basic";

import "./InsPageLayout.scss"

export default function InsPageLayout(props: any) {
  return (<>
    <BasicLayout>
      <InstNav channels={props.channels} />
      {props.children}
    </BasicLayout>
  </>)
}
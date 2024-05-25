import InstLayout from "../../../../Components/Layouts/InstLayout";
import Inst_Riverwood_About from "./About/0_Repo";
import Inst_Riverwood_Home from "./Home/0_Repo";

export default function RiverwoodLayout(props: any) {
  

  const channels = [
    Inst_Riverwood_Home,
    Inst_Riverwood_About,
  ]

  

  return (<>
    <InstLayout channels={channels}>
      {props.children}
    </InstLayout>
  </>)
}
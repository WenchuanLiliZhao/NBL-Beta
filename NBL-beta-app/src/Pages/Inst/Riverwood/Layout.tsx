import InstLayout from "../../../Components/Layouts/InstLayout";
import Inst_Riverwood_About from "./Pages/About/0_Repo";
import Inst_Riverwood_Home from "./Pages/Home/0_Repo";
import Inst_Riverwood_Library from "./Pages/Library/0_Repo";
import Inst_Riverwood_Stories from "./Pages/Stories/0_Repo";

export default function RiverwoodLayout(props: any) {
  

  const channels = [
    Inst_Riverwood_Home,
    Inst_Riverwood_Library,
    Inst_Riverwood_Stories,
    Inst_Riverwood_About,
  ]

  
  return (<>
    <InstLayout channels={channels}>
      {props.children}
    </InstLayout>
  </>)
}
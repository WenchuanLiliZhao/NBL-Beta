

import InstHeader from "../../../../../Components/PageSections/InstHeader";
import InstInfo from "../../InstInfo";
import RiverwoodLayout from "../../Layout";

export default function Content() {
  return (<>
    <RiverwoodLayout>
      <InstHeader instInfo={InstInfo} />
      Riverwood Home
    </RiverwoodLayout>
  </>)
}
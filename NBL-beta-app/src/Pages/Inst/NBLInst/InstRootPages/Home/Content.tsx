

import InstHeader from "../../../../../Components/PageSections/InstHeader";
import StoriesSection from "../../../../../Components/PageSections/StoriesSection";
import Stories from "../../Stories/Stories";
import InstInfo from "../../InstInfo";
import RiverwoodLayout from "../../Layout";

export default function Content() {
  return (<>
    <RiverwoodLayout>
      <InstHeader instInfo={InstInfo} />
      <StoriesSection
        headline={Stories.NBL_Story1}
        stories={[
          Stories.NBL_Story1,
          Stories.NBL_Story1,
          Stories.NBL_Story1,
        ]}
      />
    </RiverwoodLayout>
  </>)
}
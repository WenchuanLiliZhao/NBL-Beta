

import InstHeader from "../../../../../Components/PageSections/InstHeader";
import StoriesSection from "../../../../../Components/PageSections/StoriesSection";
import Stories from "../../../../Stories/Stories";
import InstInfo from "../../InstInfo";
import RiverwoodLayout from "../../Layout";

export default function Content() {
  return (<>
    <RiverwoodLayout>
      <InstHeader instInfo={InstInfo} />
      <StoriesSection
        headline={Stories.Story1}
        stories={[
          Stories.Story1,
          Stories.Story1,
          Stories.Story1,
        ]}
      />
    </RiverwoodLayout>
  </>)
}
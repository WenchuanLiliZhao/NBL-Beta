import RootPageHeader from "../../../Components/PageSections/RootPageHeader";
import StoriesSection from "../../../Components/PageSections/StoriesSection";
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard";
import Stories from "../../Inst/NBLInst/Stories/Stories";
import RootLayout from "../RootLayout";
import Info from "./Info";

export default function Content() {
  return (<>
    <RootLayout>
      <RootPageHeader
          info = {Info}
        />

      <WarriorStoryCard story={Stories.NBL_Story4} />

      <StoriesSection
        stories = {[
          Stories.NBL_Story1,
          Stories.NBL_Story2,
          Stories.NBL_Story3,
          Stories.NBL_Story4,
          Stories.NBL_Story1,
        ]}
      />
    </RootLayout>
  </>)
}
import RootPageHeader from "../../../Components/Heading/RootPageHeader";
import StoriesSection from "../../../Components/PageSections/StoriesSection";
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard";
import Stories from "../../Stories/Stories";
import RootLayout from "../RootLayout";


export default function Content() {
  return (<>
    <RootLayout>
      <RootPageHeader
          title= "文章"
          quote= "至人之用心若鏡，不將不迎，應而不藏，故能勝物而不傷。"
          quoteFrom= "莊子《齊物論》"
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
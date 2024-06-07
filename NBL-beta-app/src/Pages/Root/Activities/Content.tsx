import PageHeader from "../../../Components/Heading/PageHeader";
import StoriesSection from "../../../Components/PageSections/StoriesSection";
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard";
import Stories from "../../Stories/Stories";
import RootLayout from "../RootLayout";


export default function Content() {
  return (<>
    <RootLayout>
      <PageHeader
        title = "中華文化主題活動"
        quote = "夜雪初霽，荔子燈明，讀書聲徹，未覺便覺其中，有致知之樂。"
        quoteFrom = "——陸游《放翁家訓十首》"
      />

      <WarriorStoryCard label="活動推薦" story={Stories.NBL_Story1} />

      <WarriorStoryCard label="活動推薦" story={Stories.NBL_Story2} />

      <WarriorStoryCard label="活動推薦" story={Stories.NBL_Story3} />

      <StoriesSection
        label = "往期活動"
        quote = "學問之道無他，全在求真"
        quoteFrom = "《農政全書》（徐光啓著）"

        stories = {[
          Stories.NBL_Story1,
          Stories.NBL_Story2,
          Stories.NBL_Story3,
          Stories.NBL_Story4,
        ]}
      />

    </RootLayout>
  </>)
}
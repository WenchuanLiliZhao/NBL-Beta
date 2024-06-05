
import HeroStoryCard from "../../../Components/Cards/HeroStoryCard"
import WarriorStoryCard from "../../../Components/Cards/WarriorStoryCard"
import StoriesSection from "../../../Components/PageSections/StoriesSection"
import Stories from "../../Inst/NBLInst/Stories/Stories"
import RootLayout from "../RootLayout"

export default function Content() {

  // console.log(Stories.NBL_Story1)
  return (<>
    <RootLayout headline={Stories.NBL_Story4}>

      <StoriesSection
        label = "近期文章"
        quote = "學問之道無他全在求真"
        quoteFrom = "徐光啓《農政全書》"

        stories = {[
          Stories.NBL_Story1,
          Stories.NBL_Story2,
          Stories.NBL_Story3,
        ]}
      />

      <WarriorStoryCard label="活動推薦" story={Stories.NBL_Story1} />

      <HeroStoryCard story={Stories.NBL_Story4} />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </RootLayout>
  </>)
}
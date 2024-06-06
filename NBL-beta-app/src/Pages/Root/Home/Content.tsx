
import HeroStoryCard from "../../../Components/PageSections/HeroStoryCard"
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard"
import ArtsSection from "../../../Components/PageSections/ArtsSection"

import StoriesSection from "../../../Components/PageSections/StoriesSection"
import Arts from "../../Arts/Arts"
import Stories from "../../Inst/NBLInst/Stories/Stories"
import RootLayout from "../RootLayout"

export default function Content() {

  // console.log(Stories.NBL_Story1)
  return (<>
    <RootLayout headline={Stories.NBL_Story4}>

      <StoriesSection
        label = "近期文章"
        quote = "學問之道無他，全在求真"
        quoteFrom = "徐光啓《農政全書》"

        stories = {[
          Stories.NBL_Story1,
          Stories.NBL_Story2,
          Stories.NBL_Story3,
        ]}
      />

      <ArtsSection
        label = "中國紋樣"
        quote = "文以達其道，理以明其文"
        arts = {[
          Arts.Art_Art1,
          Arts.Art_Art2,
          Arts.Art_Art3,
          Arts.Art_Art4,
          Arts.Art_Art5,
        ]}
      />


      <WarriorStoryCard label="活動推薦" story={Stories.NBL_Story1} />

      <HeroStoryCard story={Stories.NBL_Story4} />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </RootLayout>
  </>)
}
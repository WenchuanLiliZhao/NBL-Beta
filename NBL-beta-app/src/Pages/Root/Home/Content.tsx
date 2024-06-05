
import HeroStoryCard from "../../../Components/Cards/HeroStoryCard"
import StoriesSection from "../../../Components/PageSections/StoriesSection"
import Stories from "../../Inst/NBLInst/Stories/Stories"
import RootLayout from "../RootLayout"

export default function Content() {

  // console.log(Stories.NBL_Story1)
  return (<>
    <RootLayout headline={Stories.NBL_Story4}>

      <StoriesSection
        title = "近期文章"
        quote = "学问之道无他全在求真"
        quoteFrom = "徐光啓《農政全書》"

        stories = {[
          Stories.NBL_Story1,
          Stories.NBL_Story2,
          Stories.NBL_Story3,
        ]}
      />

      <HeroStoryCard story={Stories.NBL_Story4} />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </RootLayout>
  </>)
}
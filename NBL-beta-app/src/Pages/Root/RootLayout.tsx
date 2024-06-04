import "./RootLayout.scss"

import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";
import HeroStoryCard from "../../Components/Cards/HeroStoryCard";

export default function RootLayout(props: any) {
  const headline = props.headline

  return (<>
    <div className="root-page-layout">
      <SiteRoof/>

      {headline != null ? (<HeroStoryCard story={headline} className="first-card" />) : ("")}

      <Nav />
      {props.children}
    </div>
  </>)
}
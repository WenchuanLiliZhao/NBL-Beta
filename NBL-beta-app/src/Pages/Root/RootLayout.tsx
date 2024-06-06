import "./RootLayout.scss"

import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";
import HeroStoryCard from "../../Components/PageSections/HeroStoryCard";
import Footer from "../../Components/Navigations/Footer";

export default function RootLayout(props: any) {
  const headline = props.headline

  return (<>
    <div className="root-page-layout">
      <SiteRoof/>

      {headline != null ? (<HeroStoryCard story={headline} className="first-card" />) : ("")}

      <Nav />
      {props.children}

      <Footer />
    </div>
  </>)
}
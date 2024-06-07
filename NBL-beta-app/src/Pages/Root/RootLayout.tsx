import "./RootLayout.scss"

import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";
import HeroStoryCard from "../../Components/PageSections/HeroStoryCard";
import Footer from "../../Components/Navigations/Footer";
import PageHeader from "../../Components/Heading/PageHeader";

export default function RootLayout(props: any) {
  const headline = props.headline
  const align = props.align
  const showHeader = props.showHeader

  return (<>
    <div className="root-page-layout">
      <SiteRoof/>

      {headline != null ? (<HeroStoryCard story={headline} className="first-card" />) : ("")}

      <Nav />

      <PageHeader info={props.info} showHeader={showHeader} align={align} />

      <div className="root-page-body">
        {props.children}
      </div>

      <Footer />
    </div>
  </>)
}
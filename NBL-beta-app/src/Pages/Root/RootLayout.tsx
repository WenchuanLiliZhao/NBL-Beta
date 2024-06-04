import "./RootLayout.scss"

import HeroCard from "../../Components/Cards/HeroCard";
import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";

export default function RootLayout(props: any) {
  const headline = props.headline

  return (<>
    <div className="root-page-layout">
      <SiteRoof/>

      {headline != null ? (<HeroCard className="first-card" />) : ("")}

      <Nav />
      {props.children}
    </div>
  </>)
}
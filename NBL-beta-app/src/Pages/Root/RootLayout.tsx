import HeroCard from "../../Components/Cards/HeroCard";
import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";

export default function RootLayout(props: any) {
  const headline = props.headline

  return (<>
    <SiteRoof />
    {headline != null ? (<HeroCard isTop={true} />) : ("")}
    <Nav />
    {props.children}
    </>)
}
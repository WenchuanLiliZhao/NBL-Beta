import Article from "../../Components/Article/Article";
import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";

export default function StoriesLayout(props: any) {
  return (<>
    <SiteRoof />
    <Nav />
    <Article>
      {props.children}
    </Article>
  </>)
}
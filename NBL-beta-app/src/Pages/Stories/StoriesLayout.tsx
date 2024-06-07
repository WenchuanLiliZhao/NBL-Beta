import Article from "../../Components/Article/Article";
import PageHeader from "../../Components/Heading/PageHeader";
import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";

export default function StoriesLayout(props: any) {
  return (<>
    <SiteRoof />
    <Nav />
    <PageHeader />
    <Article>
      {props.children}
    </Article>
  </>)
}
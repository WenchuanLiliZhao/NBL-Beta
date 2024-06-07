import Article from "../../Components/Article/Article";
import PageHeader from "../../Components/Heading/PageHeader";
import Footer from "../../Components/Navigations/Footer";
import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";

export default function StoriesLayout(props: any) {
  return (<>
    <SiteRoof />
    <Nav />

    <PageHeader info={props.info} align={`left`}/>

    <Article>
      {props.children}
    </Article>

    <Footer />
  </>)
}
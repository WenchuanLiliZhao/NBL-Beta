import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";

export default function RootLayout(props: any) {
  return (<>
    <SiteRoof />
    <Nav />
    {props.children}
    </>)
}
import "./SiteRoof.scss";
import SiteInfo from "../../SiteInfo";

export default function SiteRoof() {
  return (<>
    <div className="site-roof">
      {SiteInfo.title}
    </div>
  </>)
}
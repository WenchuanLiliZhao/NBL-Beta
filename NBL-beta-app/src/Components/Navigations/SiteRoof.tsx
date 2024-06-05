import "./SiteRoof.scss";
import SiteInfo from "../../SiteInfo";

export default function SiteRoof() {
  return (<>
    <div className="site-roof">
      <div className="site-names">
        <div className="site-name-tc">
          {SiteInfo.title}
        </div>
        {/* <div className="site-name-en">
        {SiteInfo.title_en}
        </div> */}
      </div>
    </div>
  </>)
}
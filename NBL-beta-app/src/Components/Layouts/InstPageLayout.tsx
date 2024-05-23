import Footer from "../Navigations/Footer";
import InstNav from "../Navigations/InstNav";

import "./InstPageLayout.scss"

export default function InsPageLayout(props: any) {
  return (<>
    <div className="inst-page">
      <InstNav channels={props.channels} />
      <div className="inst-body">
        {props.children}

        <Footer />
      </div>
    </div>
  </>)
}
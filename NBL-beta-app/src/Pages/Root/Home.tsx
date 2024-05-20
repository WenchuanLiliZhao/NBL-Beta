import { Link } from "react-router-dom"
import Index_Pages from "../0_IndexOfPages"

import RootPageLayout from "./1_RootPageLayout"

export default function Home() {
  return {
    title: "Home",
    key: "home", // 这个通常用作页面的地址，但是需要在前面加上 `/`。此外，也可以用作 div 的 className。
    content: (<>
      <RootPageLayout>
        <h1><span className="material-symbols-outlined">home</span>Home 家園 <span className="test">家園</span></h1>

        <Link to={`${Index_Pages.Inst_Riverwood_Home().key}`}>Riverwood</Link>
      </RootPageLayout>
    </>)
  }
}

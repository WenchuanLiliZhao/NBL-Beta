
// import EP_YiJianXiaoShi_NaHan from "./EPs/EP_YiJianXiaoShi_NaHan/0_Repo";
import TableOfContents from "./TableOfContents"

export default function Content() {

  return (<>
  
    關於這本書⋯⋯

    <p>
      <a href={`/${TableOfContents[0].eps[0].info.key}`}>EP0</a>
    </p>
  
  </>)
}
import Tag from "../Tag"
import "./InstHeader.scss"

export default function InstHeader() {
  return (<>
    <div className="inst-header-container">
      <div className="inst-header">

        <div className="inst-logo">
          <img src="https://doodleipsum.com/700/flat?i=366f07b78c8218519c32858e70d7e35d" alt="" />
        </div>

        <div className="inst-name">知書學院圖書館</div>

        <div className="inst-caption-info-container">
          <Tag variant="info" fontSize="small" icon="home_pin" text={`香港`} />
          <Tag variant="info" fontSize="small" icon="book" text={`1024本書`} />
          <Tag variant="info" fontSize="small" icon="language" text={`中文`} />
        </div>

        <div className="inst-brief">
          知書學院圖書館是一個專注於哲學領域的圖書館，旨在成為探求智慧之旅的啟航港。我們相信，哲學不僅是思考的藝術，更是生活的光芒。
        </div>
        <div className="inst-tags">
          <Tag variant="fill" fontSize="small" text={`哲學`} />
          <Tag variant="fill" fontSize="small" text={`文學`} />
          <Tag variant="fill" fontSize="small" text={`數學`} />
        </div>
      </div>
    </div>
  </>)
}
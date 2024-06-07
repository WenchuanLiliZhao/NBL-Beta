
import Article from "../../../Components/Article/Article";

import RootLayout from "../RootLayout";
import Info from "./Info";

export default function Content() {
  return (<>
    <RootLayout info={Info} align="left">
      <Article>
        <figure>
          <img src="https://cdn.kastatic.org/ka-perseus-images/e0fca29dcbc591ceb49688397e031cb0abf461ee.jpg" alt="" />

          <figcaption>
            圖注寫在這裡
          </figcaption>
        </figure>

        <p>歡迎來到「中華文化有意思」！我們致力於創造一個充滿智慧和愉悅的平台，以滿足您對知識和心靈需求的嚮往。在這裡，我們相信知識的力量能夠帶來內心的豐富與充實，就如同陶淵明所言：「好讀書，不求甚解；每有會意，便欣然忘食。」我們堅信，這種純粹而真實的學習樂趣才能帶來真正的滿足。</p>

        <p>我們的團隊集合了來自各個領域的專業人士，他們秉持著「腹有詩書氣自華」的理念，致力於傳遞有價值的內容，讓每一位讀者在瀏覽我們的網站時，都能感受到「運筆寫心，浩然自得」的精神愉悅。在這個快節奏的世界裡，我們希望能為您提供一片寧靜的閱讀天地。</p>

        <p>在我們的網站，您可以隨時隨地查閱豐富的資料、深入的分析和實用的建議，不論是在夜深人靜的時刻讀書，還是忙碌閒暇之餘瀏覽資訊，我們都希望能帶給您「三日不讀書，便覺語言無味」的體驗與快樂。</p>

        <p>來到這裡，感受知識的力量與閱讀的美好，讓我們一同在精神世界中探求無限的可能性。</p>
      </Article>
    </RootLayout>
  </>)
}
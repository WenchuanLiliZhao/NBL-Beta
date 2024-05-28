import TS from "../../../../../Components/ForAudioBooks/TranscriptSentence";
import Layout from "../../Layout";
import EPInfo from "./EPInfo";

export default function Content() {
  console.log(EPInfo.audio)
  return (<>
    <Layout ep={EPInfo}>

      <p>Vestibulum rutrum id sapien sit amet mattis. Donec in feugiat magna. Nullam ipsum metus, elementum laoreet nisl et, gravida auctor neque. Cras tempus diam id odio hendrerit porta. Cras aliquet sem in ligula volutpat iaculis. Suspendisse ultrices tortor molestie, placerat tellus ac, volutpat mauris. In sed orci ac nisi auctor venenatis. Praesent aliquam dapibus est. Vestibulum libero augue, venenatis vitae tristique et, dictum eget arcu. Donec hendrerit molestie mi mollis placerat. Nullam vel ex nisl. Duis ornare nulla nisi, vel consectetur dui semper et. Mauris sollicitudin tellus nisi, ac porttitor ex feugiat non. Mauris vitae egestas arcu. Nulla facilisi.</p>

      <p>Vestibulum rutrum id sapien sit amet mattis. Donec in feugiat magna. Nullam ipsum metus, elementum laoreet nisl et, gravida auctor neque. Cras tempus diam id odio hendrerit porta. Cras aliquet sem in ligula volutpat iaculis. Suspendisse ultrices tortor molestie, placerat tellus ac, volutpat mauris. In sed orci ac nisi auctor venenatis. Praesent aliquam dapibus est. Vestibulum libero augue, venenatis vitae tristique et, dictum eget arcu. Donec hendrerit molestie mi mollis placerat. Nullam vel ex nisl. Duis ornare nulla nisi, vel consectetur dui semper et. Mauris sollicitudin tellus nisi, ac porttitor ex feugiat non. Mauris vitae egestas arcu. Nulla facilisi.</p>
      
      <p><TS time={0.1}>Lorem ipsum dolor sit amet,</TS> <TS time={1.9}>consectetur adipiscing elit.</TS> <TS time={3}>Donec porttitor felis a diam molestie faucibus.</TS> Aliquam et tempor felis. In ac facilisis lectus, a eleifend sapien. Phasellus aliquam sapien a pretium cursus. Suspendisse ac elementum lacus, sit amet mollis augue. Aliquam arcu mauris, scelerisque et dictum non, elementum in mauris. Sed vulputate ut lectus in mollis. Sed scelerisque nulla vel ante maximus mollis. Donec vel erat quis tellus rhoncus varius ut vel dolor. Proin id leo erat. Duis congue vestibulum fermentum.</p>

      

      <p>Aenean non vehicula mi. Etiam eu metus aliquet, tincidunt mauris tristique, efficitur arcu. Donec sed dolor id velit aliquam aliquam. Integer sed metus sapien. In vel consequat tortor. Praesent ac efficitur tortor, non sodales libero. Nunc suscipit tellus ut neque porta maximus. Praesent sed tempus nisi. Curabitur orci odio, dignissim eu est id, fringilla consequat justo.</p>

      <p>Mauris ex libero, viverra vel enim sit amet, mattis lacinia lacus. Suspendisse condimentum ornare lorem nec luctus. Curabitur tristique eros at lectus lacinia dignissim. Duis ut lorem justo. Duis imperdiet orci sit amet imperdiet pharetra. Phasellus ac quam sed ex fringilla malesuada a quis sapien. Donec facilisis nisl mi. Integer tempor et odio ut gravida. Duis in dolor vitae purus finibus ornare. Praesent ultrices condimentum odio, vitae viverra ante viverra at.</p>
    </Layout>
  </>)
}
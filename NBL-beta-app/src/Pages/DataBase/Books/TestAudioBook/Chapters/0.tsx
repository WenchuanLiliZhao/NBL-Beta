import TP from "../../../../../Components/ForAudioBooks/TranscriptSentence";
import Layout from "./0_Layout";

import Info from "../Info"

export default function Section0() {
  const sectionIndex = 0

  return {
    title: "Introduction",
    sectionIndex: sectionIndex,
    key: `${Info.key}/${sectionIndex}`,

    content: (<>
      <Layout audio="https://upload.wikimedia.org/wikipedia/commons/a/ac/Marin_Marais_%281656-1728%29_%E2%80%93_Sonnerie_de_Sainte-Genevi%C3%A8ve_du_Mont_de_Paris_The_Bells_of_St._Genevieve_from_La_Gamme_et_Autres_Morceaux_de_Symphonie_%281723%29.ogg">
        <p>
          <TP time={1}>欢迎来到知书阅听图书馆有声书。</TP>
          <TP time={5}>今天我们要讨论一个非常有趣的话题。</TP>
          <TP time={10}>音频同步台词展示的功能非常有用。</TP>
          <TP time={15}>让我们来一起了解它的实现方式。</TP>
          <TP time={20}>谢谢大家的聆听。</TP>
        </p>
      </Layout>
    </>)
  }
}
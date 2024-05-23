import TP from "../../../../../Components/ForAudioBooks/TranscriptSentence";
import Layout from "./0_Layout";

import Info from "../Info"

export default function Section1() {

  return {
    title: "Section 1",
    key: `${Info.key}/audio-test`,

    content: (<>
      <Layout audio="https://upload.wikimedia.org/wikipedia/commons/6/61/Marin_Marais_%281656-1728%29_-_Tombeau_de_Mr._Meliton%2C_No._83_from_Premier_livre_de_pi%C3%A8ces_%C3%A0_une_et_%C3%A0_deux_violes_%281689%29.ogg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam consectetur deleniti magni, in nihil asperiores ratione temporibus, laboriosam, eos cupiditate deserunt porro! Assumenda impedit repellat quae vel odit obcaecati!
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
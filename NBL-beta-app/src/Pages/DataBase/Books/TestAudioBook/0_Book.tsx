
import Chapters from "./0_Chapters";
import Content from "./Content";
import Info from "./Info";

export default function Book_TextAudioBook() {

  return {
    ...Info,

    ...Chapters,

    content: Content(),
  }
}
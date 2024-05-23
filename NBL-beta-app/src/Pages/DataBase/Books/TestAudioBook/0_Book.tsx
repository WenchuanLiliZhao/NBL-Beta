
import Content from "./Content";
import Info from "./Info";

export default function Book_TextAudioBook() {

  return {
    ...Info,

    content: Content(),
  }
}

import Content from "./Content";
import Info from "./Info";

// import Author_GalileoGalilei from "../../Authors/GalileoGalilei";

export default function Book_TextAudioBook() {

  return {
    ...Info,

    content: Content(),
  }
}
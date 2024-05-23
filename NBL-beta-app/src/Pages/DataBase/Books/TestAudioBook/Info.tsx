import Author_GalileoGalilei from "../../Authors/GalileoGalilei";
import SampleHTMLBook_TestAudioBook from "./SampleHtml";

const Info = {
  title: "Test Audio Book",
  key: "test-audio-book",

  cover: "https://upload.wikimedia.org/wikipedia/commons/9/96/Edziza042909--_066-15.jpg",

  info: {
    authors: [
      Author_GalileoGalilei,
    ],

    catagories: "Test",
  },

  brief: "Brief goes here...",

  samples: SampleHTMLBook_TestAudioBook(),
}

export default Info
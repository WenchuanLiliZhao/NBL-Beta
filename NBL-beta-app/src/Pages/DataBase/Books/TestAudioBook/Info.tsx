import Author_GalileoGalilei from "../../Authors/GalileoGalilei";
import Chapters from "./Chapters/0_Chapters";

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

  // chapters: Chapters,

  toc: {
    p0: {
      // title: "Into",
      chapters: [
        Chapters.Chapter0,
      ]
    },

    p1: {
      title: "Part 1",
      chapters: [
        Chapters.Chapter1,
      ]
    }
  }
}

export default Info
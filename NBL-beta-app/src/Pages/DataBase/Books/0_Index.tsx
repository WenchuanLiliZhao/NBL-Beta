import Book_DialogueConcerningTheTwoChiefWorldSystems from "./DialogueConcerningTheTwoChiefWorldSystems/0_Book";
import Book_JuliusCaesar from "./JuliusCaesar/0_Book";
import Book_TextAudioBook from "./TestAudioBook/0_Book";
import Toc from "./TestAudioBook/Chapters/0_Toc";
import SampleHTMLBook_TestAudioBook from "./TestAudioBook/SampleHtml";

const Index_Books = {
  Book_DialogueConcerningTheTwoChiefWorldSystems,

  Book_JuliusCaesar,

  Book_TextAudioBook,
  SampleHTMLBook_TestAudioBook,
  ...Toc
}

export default Index_Books
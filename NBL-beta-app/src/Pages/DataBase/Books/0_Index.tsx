import Book_DialogueConcerningTheTwoChiefWorldSystems from "./DialogueConcerningTheTwoChiefWorldSystems/0_Book";
import Book_JuliusCaesar from "./JuliusCaesar/0_Book";
import Book_TextAudioBook from "./TestAudioBook/0_Book";
import Toc from "./TestAudioBook/Chapters/0_Toc";

const Index_Books = {
  Book_DialogueConcerningTheTwoChiefWorldSystems,

  Book_JuliusCaesar,

  Book_TextAudioBook,
  ...Toc
}

export default Index_Books
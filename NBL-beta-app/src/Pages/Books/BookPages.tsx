import Book_TemplateBook from "./0_TemplateBook/0_Repo";
import Book_Hamlet from "./Hamlet/0_Repo";
import Book_Metamathematics from "./Metamathematics/0_Repo";
import Book_Nahan_LuXun from "./NaHan_LuXun/0_Repo";
import Book_TheSocialContract from "./TheSocialContract/0_Repo";
import Book_TheCelticTwilight from "./TheCelticTwilight/0_Repo";

const BookPages = {
  ...Book_TemplateBook.eps,
  
  ...Book_TheCelticTwilight.eps,
  ...Book_Nahan_LuXun.eps,
  ...Book_TheSocialContract.eps,
  ...Book_Hamlet.eps,
  ...Book_Metamathematics.eps,
}

export default BookPages
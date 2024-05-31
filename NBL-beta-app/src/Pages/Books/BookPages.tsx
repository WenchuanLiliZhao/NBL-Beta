import Book_TemplateBook from "./0_TemplateBook/0_Repo";
import Book_Nahan_LuXun from "./NaHan_LuXun/0_Repo";
import Book_TheSocialContract from "./The Social Contract/0_Repo";
import Book_TheCelticTwilight from "./TheCelticTwilight/0_Repo";

const BookPages = {
  ...Book_TemplateBook.eps,
  
  ...Book_TheCelticTwilight.eps,
  ...Book_Nahan_LuXun.eps,
  ...Book_TheSocialContract.eps,
}

export default BookPages
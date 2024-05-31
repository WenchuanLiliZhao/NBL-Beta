import Content from "./Content";
import EPs from "./EPs";
import BookInfo from "./Info";
import Toc from "./Toc";

const Book_TemplateBook = {
  info: BookInfo,
  content: Content(),
  eps: EPs,
  toc: Toc,
}

export default Book_TemplateBook
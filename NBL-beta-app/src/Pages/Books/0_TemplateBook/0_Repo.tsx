import Content from "./Content";
import EPs from "./EPs";
import BookInfo from "./Info";
import TOC from "./TOC";

const Book_TemplateBook = {
  info: BookInfo,
  content: Content(),
  eps: EPs,
  toc: TOC,
}

export default Book_TemplateBook
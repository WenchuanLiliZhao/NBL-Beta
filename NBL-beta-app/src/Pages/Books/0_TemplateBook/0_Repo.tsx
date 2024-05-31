import Content from "./Content";
import EPs from "./EPs";
import BookInfo from "./Info";
import TableOfContents from "./TableOfContents";

const Book_TemplateBook = {
  info: BookInfo,
  content: Content(),
  eps: EPs,
  toc: TableOfContents,
}

export default Book_TemplateBook
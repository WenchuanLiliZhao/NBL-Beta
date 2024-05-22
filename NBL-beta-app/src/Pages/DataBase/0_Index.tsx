import Index_Authors from "./Authors/0_Index";
import Index_Books from "./Books/0_Index";
import Index_Publishers from "./Publishers/0_Index";

const Index_Database = {
  ...Index_Authors,
  ...Index_Books,
  ...Index_Publishers,
}

export default Index_Database
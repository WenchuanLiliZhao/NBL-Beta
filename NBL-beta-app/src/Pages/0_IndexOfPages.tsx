import Index_RootPages from "./Root/0_Index_RootPages"
import Index_Inst from "./Inst/0_Index_Inst"
import Index_Authors from "./DataBase/Authors/0_Index"
import Index_Books from "./DataBase/Books/0_Index"
import Index_Publishers from "./DataBase/Publishers/0_Index"


const Index_Pages = {
  ...Index_RootPages,
  ...Index_Inst,
  ...Index_Authors,
  ...Index_Books,
  ...Index_Publishers,
}

// function Index_Pages() {}

export default Index_Pages


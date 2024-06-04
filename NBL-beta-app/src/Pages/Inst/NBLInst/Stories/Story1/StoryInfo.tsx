
import Editors from "../../../../Editors/Editors"
import InstInfo from "../../InstInfo"

const StoryInfo = {
  title: "一份關於基礎數學的簡小書單",
  inst: InstInfo,

  update: [2023,1,10],

  key: `${InstInfo.key}/story1`,
  cover: "https://i.pinimg.com/564x/07/6e/f1/076ef12a3cefebb101fddcc7aac74940.jpg",

  test: InstInfo.brief,

  authors: [
    {
      author: Editors.Editor_ShaoQianwen,
      role: "撰文"
    },

    {
      author: Editors.Editor_ZhaoWenchuan,
      role: "插圖"
    },
  ],

  brief: "敦煌位於中國甘肅省西北部，是古絲綢之路的重要節點，歷史悠久、文化豐富。",
}

export default StoryInfo
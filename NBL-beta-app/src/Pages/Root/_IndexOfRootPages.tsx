// 这样，不需要在其他页面上一个个 import 我们的页面，只需要 import 这里的 component 就可以了。
// 例如，在该 component 后面加上 `.Home` 便可以调用 Home，而 `.Home.content` 便可以调用该页面的内部参数。
// 页面详情，请直接参考 .Home

import Home from "./Home";
import About from "./About";
import Privacy from "./Privacy";

import NoPage from "./NoPage";

const IndexOfRootPages = {
  Home,
  About,
  Privacy,
  NoPage,
}



export default IndexOfRootPages
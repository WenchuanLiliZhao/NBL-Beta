// 在這裡，我將寫一個所有 RootPages 的基本結構和佈局，以免每個 RootPage 還需要額外單獨編寫佈局和樣式

import Nav from "../../Components/Nav";

function RootPageLayout(props: any) {
  return (<>
    <Nav />
    {props.children}
  </>)
}

export default RootPageLayout
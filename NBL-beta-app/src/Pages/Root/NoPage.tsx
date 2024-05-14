// 本页是 404 页面

import RootPageLayout from "./1_RootPageLayout"

const NoPage = {
  title: "NoPage",
  key: "*",
  content: (<>
    <RootPageLayout>
      <h1>404 Not Found</h1>
    </RootPageLayout>
  </>)
}

export default NoPage
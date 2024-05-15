// 本页是 404 页面

import RootPageLayout from "./1_RootPageLayout"

export default function NoPage() {
  return {
    title: "NoPage",
    key: "*",
    content: (<>
      <RootPageLayout>
        <h1>404 Not Found</h1>
      </RootPageLayout>
  </>)
  }
}

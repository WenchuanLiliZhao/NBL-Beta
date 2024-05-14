import RootPageLayout from "./1_RootPageLayout"


const Home = {
  title: "Home",
  key: "home", // 这个通常用作页面的地址，但是需要在前面加上 `/`。此外，也可以用作 div 的 className。
  content: (<>
    <RootPageLayout>
      <h1>Home</h1>
    </RootPageLayout>
  </>)
}

export default Home

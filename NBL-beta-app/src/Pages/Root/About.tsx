import RootPageLayout from "./1_RootPageLayout"

export default function About() {
  return {
    title: "About",
    key: "about",
    content: (<>
      <RootPageLayout>
        <h1>About</h1>
      </RootPageLayout>
    </>)
  }
}
import Layout from "../../Layout";
import EPInfo from "./EPInfo";

export default function Content() {
  console.log(EPInfo.audio)
  return (<>
    <Layout audio={EPInfo.audio}>
      EP001
    </Layout>
  </>)
}
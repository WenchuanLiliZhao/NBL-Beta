
import HeroCard from "../../../Components/Cards/HeroCard"
import RootLayout from "../RootLayout"

export default function Content() {

  return (<>
    <RootLayout>
      <HeroCard isTop={true} />
    </RootLayout>
  </>)
}
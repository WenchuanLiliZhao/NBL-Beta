import "./ArtsSection.scss"

import SectionHeader from '../Heading/SectionHeader'
import './ArtsSection.scss'
import ArtFrame from "../Cards/ArtFrame"

export default function ArtsSection(props: any) {
  const label = props.label // string
  const quote = props.quote // string
  const quoteFrom = props.quoteFrom // string
  const arts = props.arts // array
  
  return (<>
    <section className="arts-section page-section-big">
      <SectionHeader
        label = {label}
        quote = {quote}
        quoteFrom = {quoteFrom}
      />
      <div className="arts-section-container">

        <div className="first-art">
          <ArtFrame art={arts[0]} />
        </div>

        <div className="arts-small">
          {arts.filter((item: any, i: any) => (i > 0 && item)).map((item: any, i: any) => (
            <ArtFrame art={item} key={`${item}${i}`} />
          ))}
        </div>

      </div>      
    </section>
  </>)
}
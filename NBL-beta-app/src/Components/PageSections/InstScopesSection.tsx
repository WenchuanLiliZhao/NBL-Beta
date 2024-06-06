import "./InstScopesSection.scss"
import SectionHeader from "../Heading/SectionHeader"


export default function InstScopeSection(props: any) {
  const label = props.label // string
  const quote = props.quote // string
  const quoteFrom = props.quoteFrom // string

  const insts = props.insts // object

  return (<>
    <section className="inst-scopes-section page-section-big">
      <SectionHeader label={label} quote={quote} quoteFrom={quoteFrom} />

      <div className="insts">
        {insts.map((item: any, i: any) => (
          <a href={`/${item.info.key}`} className="inst-scope" key={`${item}${i}`}>
            <div className="inst-cover div-bg-img">
              <div className="img" style={{backgroundImage: `url(${item.info.cover})`}}></div>
              <div className="inst-cover-border"></div>
            </div>
            <div className="inst-info">
              <div className="inst-title font-article">
                {item.info.title}
              </div>
              <div className="inst-location">
                {item.info.location}，{item.info.state}
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  </>)
}
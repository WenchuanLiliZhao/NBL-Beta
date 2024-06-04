
import "./SectionHeader.scss"

export default function SectionHeader(props: any) {
  const title = props.title
  const quote = props.quote

  return (<>
    <div className="section-header">
      <div className="section-title">{title}</div>
      <div className="section-quote">{quote}</div>
    </div>
  </>)
}
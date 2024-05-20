import "./Tag.scss"



export default function Tag(props: any) {
  const icon = props.icon;
  var iconContainer = (<></>);

  if (icon != null) {
    iconContainer = (<>
      <div className={`icon-container`}><span className="material-symbols-outlined icon">{icon}</span></div>
    </>)
  }

  return (<>
    <div className="react-tag-container">
      <div className={`react-tag-${props.variant} size-${props.fontSize}`}>
        {iconContainer}
        <div className="text">{props.text}</div>
      </div>
    </div>
  </>)
}
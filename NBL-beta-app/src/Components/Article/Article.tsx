import "./Article.scss"

export default function Article(props: any) {
  const isInner = props.isInner

  const theClass = `${isInner == true ? "inner" : "page-section-big"}`

  return (<>
    <div className={`nbl-plus-article ${theClass} ${props?.className}`}>
      <article className="nbl-plus-article-container font-article">
        {props.children}
      </article>
    </div>
  </>)
}
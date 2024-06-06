import "./Article.scss"

export default function Article(props: any) {
  return (<>
    <div className="nbl-plus-article page-section-big">
      <article className="nbl-plus-article-container font-article">
        {props.children}
      </article>
    </div>
  </>)
}
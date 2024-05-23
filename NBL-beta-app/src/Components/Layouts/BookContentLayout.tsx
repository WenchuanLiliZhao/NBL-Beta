import { Link } from "react-router-dom"





export default function BookContentLayout(props: any) {
  const info = props.info
  const bookTitle = info.title
  const bookToc = info.toc

  const firstChapter = bookToc.p0.chapters[0]


  return (<>
    <p>Book Content Layout...</p>
    
    <p>这本书叫做 {bookTitle}</p>

    
    {/* <p>{bookBrief}</p> */}
    <p>《{bookTitle}》</p>
    <p><Link to={`/${firstChapter().key}`}>Link</Link></p>

    {props.children}
  </>)
}
import { Link } from "react-router-dom"





export default function BookContentLayout(props: any) {
  const info = props.info
  const bookToc = info.toc
  const bookTitle = info.title
  const bookBrief = info.brief



  const ReadingFrom = bookToc[Object.keys(bookToc)[0]]
  console.log(ReadingFrom().sectionIndex)
  const ReadingFromKey = String(ReadingFrom().sectionIndex)

  return (<>
    <p>Book Content Layout...</p>
    
    <p>{bookBrief}</p>
    <p>《{bookTitle}》</p>
    <p><Link to={ReadingFromKey}>Link</Link></p>
    {props.children}

    
  </>)
}
// import { Link } from "react-router-dom"





export default function BookContentLayout(props: any) {
  const info = props.info
  const bookTitle = info.title
  
  const toc = props.toc;
  const iniChapter = toc[0].chapters[0]().key;
  console.log(iniChapter)

  // const firstChapter = bookToc.p0.chapters[0]


  return (<>
    <p>Book Content Layout...</p>
    
    <p>这本书叫做 {bookTitle}</p>

    
    {/* <p>{bookBrief}</p> */}
    <p>《{bookTitle}》</p>
    <p><a target="_blank" href={`/${iniChapter}`}>Link</a></p>

    {props.children}
  </>)
}
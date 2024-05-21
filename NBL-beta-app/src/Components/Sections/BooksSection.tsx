import BookHeadlineCard from "../Card/BookHeadlineCard";
import SectionHeader from "../Heading/SectionHeader";

export default function BooksSection(props: any) {
  const headline = props.headline;
  if (headline != null) {
    console.log(headline);
  }


  // 这个需要整理成虚拟数据库
  const myBook = {
    title: "Book Title",
    authors: [
      {
        name: "Giotto",
      },

      {
        name: "Forty-two",
      },
    ],

    cover: "https://i.pinimg.com/564x/38/a9/14/38a914f21ba01c5acff93296a54e7571.jpg",

    publisher: {
      name: "Taschen",
    },

    brief: (<>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex nunc, luctus sed lectus ut, porttitor varius lacus. In hac habitasse platea dictumst. Cras quis enim venenatis, ornare lorem non, finibus orci. Aliquam vehicula dictum lobortis. Sed odio urna, facilisis vitae nisl eu, iaculis pretium nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ante lacus, efficitur non semper posuere, porttitor vel arcu. Fusce erat nulla, tristique rutrum ipsum quis, volutpat ultrices ipsum. Curabitur non lorem tristique, venenatis est et, rutrum sapien.</p>
    </>)
  }

  return (<>
    <div className="books-section">
      <SectionHeader title="推薦圖書" btnLink="" btnText="查看更多" />

      <div className="books-section-body">
        <div className="books-section-headline-container">
          < BookHeadlineCard book={myBook}/>
        </div>
      </div>
    </div>
    
  </>)
}
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BookTocSideNav.scss';

export default function BookTocSideNav(props: any) {
  const { book } = props;
  const { toc } = book;
  const noAudioIcon = (<><span className="material-symbols-outlined icon">article</span></>);
  const audioIcon = (<><span className="material-symbols-outlined icon">sound_sampler</span></>);
  
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);

    document.querySelectorAll("body")[0].classList.toggle("scroll-disabled");
  }

  return (
    <>
      <div className={`book-toc-sidenav-clopen-bg-btn ${isCollapsed ? 'clopen' : ''}`} onClick={toggleSidebar}></div>

      <div className="book-toc-sidenav-clopen-btn-alt" onClick={toggleSidebar}>
        <span className="material-symbols-outlined icon">menu_open</span>
      </div>

      <div className={`book-toc-sidenav ${isCollapsed ? 'clopen' : ''}`} id="book-toc-sidenav">
        <div className="book-toc-header">
          <div className="info">知書閱聽圖書館</div>
          <div className="clopen-btn" onClick={toggleSidebar}>
            <span className="material-symbols-outlined icon">menu_open</span>
          </div>
        </div>

        <div className="book-toc-sidenav-container">
          <div className="book-title-container">
            <div className="book-title">{book.info.title}</div>
            <div className="book-authors">
              {book.info.authors.map((author: any, i: any) => (
                <span className="book-author" key={`${author}${i}`}>
                  {i !== 0 ? ', ' : ''}
                  {author.info.title}
                </span>
              ))}
            </div>
          </div>

          <div className="book-toc">
            {toc.map((part: any, i: any) => (
              <div className="part" key={`${part}${i}`}>
                {part.title != null ? (<div className="part-title">{part.title}</div>) : (<></>)}

                <div className="eps">
                  {part.eps.map((ep: any, k: any) => (
                    <NavLink className="ep" key={`${ep}${k}`} to={`/${ep.info.key}`}>
                      {ep.info.audio !== null ? audioIcon : noAudioIcon}
                      <span className="text">{ep.info.title}</span>
                      {/* here is the placeholder for the icon of locked item */}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
import { NavLink } from "react-router-dom"
import "./BookTocSideNav.scss"

export default function BookTocSideNav(props: any) {
  const toc = props.toc

  const noAudioIcon = (<><span className="material-symbols-outlined">article</span></>)
  const audioIcon = (<><span className="material-symbols-outlined">sound_sampler</span></>)

  return (<>
    <div className="book-toc-sidenav">
      Toc:
      {toc.map((part: any, i: any) => (
        <div key={`${part}${i}`}>
          {part.title}

          {part.eps.map((ep: any, k: any) => (
            <NavLink key={`${ep}${k}`} to={`/${ep.info.key}`}>
              <div>
                <span>{ep.info.audio != null ? audioIcon : noAudioIcon}</span>
                <span>{ep.info.title}</span>
              </div>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
    <p>================</p>
    <p>================</p>
  </>)
}
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function NavLink2Top(props: any) {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  return (<>
    <NavLink to={props.to} className={props.className}>
      {props.children}
    </NavLink>
  </>)
}
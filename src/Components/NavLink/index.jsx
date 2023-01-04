import { Link } from "react-router-dom";


export const NavLink = ({link, mob='', direction}) => (
  <li className="mx-4 text-base" id={mob}>
    <Link to={direction}>{link}</Link>
  </li>
)
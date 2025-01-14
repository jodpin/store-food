// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sidebar({ links, close }) {
  const location = useLocation();

  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <Link
          className={location.pathname == link.path? "sidebar-link active": "sidebar-link"}
          to={`${link.path}`}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

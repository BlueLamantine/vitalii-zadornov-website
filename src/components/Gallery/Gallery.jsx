import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import Video from '../Video';
import Photo from '../Photo';
import './Gallery.scss';

const Gallery = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="gallery-content">
      <nav className="gallery-navbar navbar-default">
      <ul className="gallery-menu">
        <li className="nav-item">
          <NavLink
            exact
            to={`${url}`}
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Фото
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to={`${url}/video`}
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Видео
          </NavLink>
        </li>
      </ul>
      </nav>
      <div>
        <Switch>
          <Route path={`${path}/:video`}>
            <Video />
          </Route>
          <Route path={`${path}`}>
            <Photo />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Gallery;

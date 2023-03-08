import css from './project.module.css'
import {NavLink, useNavigate} from "react-router-dom";


const Project = ({data, index}) => {
  const {img}=data

    return (

  <div className={css.boxProject}>
      <NavLink to={`/portfolio/${index}`}>
      <div>
          <div className={css.boxImg}>
              <img className={css.img} src={img} alt="img"/>
          </div>
          <h2 className={css.title}>{data.title}</h2>
      </div>
      </NavLink>
  </div>

);
};

export {Project};
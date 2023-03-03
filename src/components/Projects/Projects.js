import {DataBase} from '../PortfolioData/DataBase'
import {Project} from "../Project/Project";
import css from '../Project/project.module.css'

const Projects = () => {
return (
  <div className={css.box}>
      {DataBase.map((data,index)=><Project key={index} data={data}/>)}
  </div>
);
};

export {Projects};
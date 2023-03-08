import {DataBase} from '../PortfolioData/DataBase'
import {Project} from "../Project/Project";
import css from '../Project/project.module.css'

const Projects = () => {
return (


      <div className={css.box}>
        <h1 className={css.proj}>Project</h1>
        {DataBase.map((data,index)=> <Project key={index} index={index} data={data}/>)}
      </div>


);
};

export {Projects};
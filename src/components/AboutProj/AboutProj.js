import {useNavigate, useParams} from "react-router-dom";
import {FaGithub} from 'react-icons/fa';

import {DataBase} from '../PortfolioData/DataBase'
import './aboutProj.css'

const AboutProj = () => {
    const {id}=useParams()

    const navigate =useNavigate()

    const project=DataBase[+id]
    const {img}=project
return (
<div>
    <h1 className={'projTitl'}>{project.title}</h1>
  <div className={'boxAbout'}>

      <div className={'boxChar'}>
          <img className={'imgAbout'} src={img} alt=""/>

          {/*<button onClick={()=>navigate(-1)}></button>*/}
      </div>
  </div>


        <a className={'link'} href={project.git} target={"_blank"}>
            <div className={'href'}>
            <FaGithub className={'FaGithub'}/>
           <span className={'github'}>GitHub</span>
            </div>
        </a>


</div>
);
};

export {AboutProj};
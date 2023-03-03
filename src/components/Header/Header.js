import {NavLink, useNavigate} from "react-router-dom";
import { FaUserAstronaut } from 'react-icons/fa';

import css from './header.module.css'
import {Switcher} from "../Switcher/Switcher";
import './menu'

const Header = () => {

  const navigate=useNavigate()

  const active = () => {
    let menu=document.querySelector('ul').classList.toggle(css.active)
     }
  const remove=()=>{
        document.querySelector('ul').classList.remove(css.active)
    }

return (

        <header className={css.header}>

            <div className={css.box}>
                <div>
                   <FaUserAstronaut onClick={()=>navigate('/')} className={css.icon}/>
                </div>

                   <div onClick={()=>active()} className={css.menuBtn}>
                        <span></span>
                        <span></span>
                        <span></span>
                   </div>


            <div className={css.menu}>
                <ul>

                        <NavLink onClick={()=>remove()} to={'/'}>Home</NavLink>
                         <div className={css.hr}></div>

                    <NavLink onClick={()=>remove()} to={'portfolio'}>Portfolio</NavLink>
                         <div className={css.hr}></div>

                    <NavLink onClick={()=>remove()} to={'contacts'}>Contacts</NavLink>
                          <div className={css.hr}></div>

                </ul>

            </div>

            </div>
            <Switcher/>
        </header>


);
};

export {Header};
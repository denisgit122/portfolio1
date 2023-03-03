import { FaMoon, FaSun} from 'react-icons/fa';

import css from './switcher.module.css'

const Switcher = () => {

      const re = () => {
      if (localStorage.getItem('them') === 'white') {
      localStorage.removeItem('them')
  } else {
      localStorage.setItem('them', 'white')
  }
      addWhite()
  }

      function addWhite() {
      try {
      if (localStorage.getItem('them')==='white'){
          document.querySelector('html').classList.add('whit')
      }else { document.querySelector('html').classList.remove('whit')}

      }catch (e) {}
  }
      addWhite()

      return (
      <div className={css.box}>
          <div> <label  className={css.switch}>

              < FaMoon className={css.moon}/>

              <input
                  // checked={localStorage.getItem('them') ? true : false}
                  defaultChecked={localStorage.getItem('them') ? true : false}
                  onClick={()=>re()}
                  type="checkbox"
                  className={css.switch__inp}
                  />
              <span   className={css.switch__slider}></span>
          </label>
              <FaSun className={css.sun}    icon ={css.faSun}/>

          </div>
      </div>

);
};

export {Switcher};
import './home.css'
import css from './home.module.css'
const Home = () => {

return (
  <div>
  <div className={' backgroundHome'}>

    < div className={'boxClip'}>
        <div className={css.clip}></div>
        <div className={css.clip2}>
            <div>
                <h1 className={'about'}>about.</h1>
                <div className={ css.describe}>
                    <h3 className={'me'}>Hi, my name is
                        <span className={'name'}>Denis</span>
                        <p className={'front'}>a frontend developer </p>
                        <span className={'learning'}>with passion for learning <span className={'learning'}>and creating</span> </span>
                    </h3>
                </div>
            </div>
        </div>
        <div className={css.clip3}></div>

    </div>

  </div>
      <hr className={css.hr}/>

    <div className={css.headBoxRad}>
        <div>
            <h2 className={'frontDev'}> Front-end</h2>
            <ul className={'ul'}>
                <li>HTML,</li>
                <li>CSS,</li>
                <li>JavaScript,</li>
                <li>React,</li>
                <li>Redux</li>
            </ul>

        </div>


        <div className={css.boxRad}>
            <div>
                <div className={css.radius}></div>
            </div>

            <div>
                <div className={css.radius2}>
                    <h3 className={'Backend'}>Backend</h3>
                </div>
            </div>

            <div>
                <div className={css.radius3}>
                   <h3 className={'frontend'}>Frontend</h3>
                </div>
            </div>

            <div>
                <div className={css.radius4}></div>
            </div>

        </div>



        <div>
            <h2 className={'frontDev'}> Back-end</h2>
            <ul className={'ul'}>
                <li>MySQL (basic knowledge),</li>
                <li>Node (basic knowledge),</li>
                <li>MongoDB (basic knowledge)</li>
                <li>Express (basic knowledge)</li>
                <li>Mongoose (basic knowledge)</li>
                <li>TS</li>
            </ul>

        </div>

    </div>
  </div>
);
};

export {Home};
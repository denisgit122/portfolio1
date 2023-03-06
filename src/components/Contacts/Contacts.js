import './contact.css'
import { FaFacebook,FaInstagram, FaGithub, FaTwitter} from "react-icons/fa";

const Contacts = () => {

return (
  <div className={'boxContact'}>
<div className={'typing'}>
    <h1 className={'type'}>Contact.</h1>
    <p className={'typeP'}>Get in touch with me via social media or email.</p>
</div>

      <div className={'boxIcon'}>
          <div className={'boxIconName'}>
            <a href="https://www.facebook.com/denis.yaholnyk" target={"_blank"}>
                  <div  className={'icon && icon1'}>
                      <FaFacebook style={{color:"whitesmoke", fontSize:"6vh"}}/>
                  </div>
            </a>
              <span>
                    Facebook
              </span>
          </div>

        <div  className={'boxIconName'}>
            <a href="https://instagram.com/den_yaholnyk?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                <div className={'icon'}>
                    <FaInstagram style={{color:"whitesmoke", fontSize:"6vh"}}/>
                </div>
            </a>
                <span>
               Instagram
            </span>
        </div>

        <div  className={'boxIconName'}>
            <a href="https://github.com/denisgit122?tab=repositories" target={"_blank"}>
                <div  className={'icon && icon2'}>
                    <FaGithub style={{color:"whitesmoke", fontSize:"6vh"}}/>
                </div>
            </a>
                <span>
                    Github
                </span>

        </div>

        <div  className={'boxIconName'}>
             <div  className={'icon && icon3'}>
                 <FaTwitter style={{color:"whitesmoke", fontSize:"6vh"}} />
             </div>
            <span>
                Twitter
            </span>
        </div>

      </div>

  </div>
);
};

export {Contacts};
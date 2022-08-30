import React from "react";

import "./Footer.css";
import Logo from "..//../Image/logotype.png";
import Inst from "../../Image/inst.svg";
import Vk from "../../Image/vk.svg";
import Fb from "../../Image/facebook.svg";
import Ok from "../../Image/ok.svg";
import Tel from "../../Image/phone.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__left">
              <img src={Logo} alt="logo" width={150} height={140} />
              <div className="footer__text">
                <p onClick={() => navigate("/about")}>О компании</p>
                <p onClick={() => navigate("/contacts")}>Контакты</p>
                <p>Вакансии</p>
                <p>Отзывы</p>
              </div>
            </div>
            <div className="footer__right">
              <a href="https://www.instagram.com/?hl=ru">
                <img src={Inst} alt="instagram" />
              </a>
              <a href="https://vk.com/nuriqgh">
                <img src={Vk} alt="vk" />
              </a>
              <a href="https://www.facebook.com/Nuriqgh">
                <img src={Fb} alt="facebook" />
              </a>
              <a href="https://www.youtube.com/watch?v=XEjLoHdbVeE">
                <img src={Ok} alt="ok" />
              </a>
              <a className="footer__right-phone" href="Tel:8 800 777 33 33">
                {" "}
                <img src={Tel} alt="phone" />
                +996555988555
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

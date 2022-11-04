import React from "react";
import zuriIcon from "./icons/zuri_icon.png";
import i4gIcon from "./icons/I4G.png";

function Footer() {
  return (
    <div className="footer">
      <img
        src={zuriIcon}
        id="zuri_con"
        alt="zuri_icon"
        className="footer__entity"
      />
      <p className="footer__entity" id="footer__text">
        HNG Intership 9 Frontend Task
      </p>
      <img
        src={i4gIcon}
        id="i4g_icon"
        alt="i4g_icon"
        className="footer__entity"
      />
    </div>
  );
}

export default Footer;

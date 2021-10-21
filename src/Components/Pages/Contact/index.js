import React from "react";
import {
  ContactContainer,
  H3ader,
  SocialsCont,
  Social,
  SocialLogo,
  SocialDeets
} from "./ContactElements";
import Mail from "/src/Components/Images/Extras/mail.png";
import Phone from "/src/Components/Images/Extras/phone.png";
// import Insta from "/src/Components/Images/Extras/insta.png";
import Lin from "/src/Components/Images/Extras/linkedIN.png";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <H3ader>Contact</H3ader>
        <SocialsCont>
          <Social>
            <SocialLogo src={Mail} />
            <SocialDeets>imran.chg@gmail.com</SocialDeets>
          </Social>
          <Social>
            <SocialLogo src={Phone} />
            <SocialDeets>+44 7873 505522</SocialDeets>
          </Social>
          {/*<Social>*/}
          {/*  <SocialLogo src={Insta} />*/}
          {/*  <SocialDeets>ic.y26</SocialDeets>*/}
          {/*</Social>*/}
          <Social>
            <SocialLogo src={Lin} />
            <a
              href="https://www.linkedin.com/in/imran-chagani-75b4051a1/"
              target="_blank"
              style={{ color: "white", marginLeft: "4vw", fontWeight: "bold" }}
            >
              Imran Chagani
            </a>
          </Social>
        </SocialsCont>
      </ContactContainer>
    </>
  );
};

export default Contact;

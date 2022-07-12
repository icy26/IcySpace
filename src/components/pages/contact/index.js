import React from "react";
import {
  ContactContainer,
  H3ader,
  SocialsCont,
  Social,
  SocialLogo,
  SocialDeets
} from "./ContactElements";
//import Mail from "components/images/extras/mail.png";
import Phone from "components/images/extras/phone.png";
// import Insta from "/src/components/images/extras/insta.png";
import Lin from "components/images/extras/linkedIN.png";
import Pdf from "components/images/extras/pdf-icon.png";
import Fwp from "components/pages/contact/full_work_profile.pdf";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <H3ader>Contact</H3ader>
        <SocialsCont>
          {/*<Social>*/}
          {/*  <SocialLogo src={Mail} />*/}
          {/*  <SocialDeets>imran.chg@gmail.com</SocialDeets>*/}
          {/*</Social>*/}
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
          <Social>
            <SocialLogo src={Pdf} />
            <a
                href={Fwp}
                download
                style={{ color: "white", marginLeft: "4vw", fontWeight: "bold" }}
            >
              Download Full Work Profile
            </a>
          </Social>
        </SocialsCont>
      </ContactContainer>
    </>
  );
};

export default Contact;

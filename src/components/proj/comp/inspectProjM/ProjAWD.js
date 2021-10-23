import React from "react";
import { CloseM } from "components/proj/ProjElements";
import {
  Large,
  TxtM,
  InsButton,
  SlideM,
  ImgM,
  LargeFull
} from "../CompElements";
import { Slider } from "components/proj/slides/Slider";
import AWDSlides from "components/proj/slides/compSlides/AWDSlides";
import Cover from "components/images/comp/covers/AWDCover.png";

export default class ProjAWD extends React.Component {
  state = {
    isInspect: false
  };

  toggleMenu() {
    this.setState({ isInspect: !this.state.isInspect });
  }

  render() {
    const isInspect = this.state.isInspect;
    return (
      <>
        <InsButton onClick={() => this.toggleMenu()}>
          <ImgM src={Cover} style={{ marginLeft: "px" }} />
        </InsButton>

        {isInspect && (
          <LargeFull>
            <Large>
              <SlideM>
                <Slider slides={AWDSlides} />
              </SlideM>
              <TxtM style={{ backgroundColor: "rgba(255, 255, 240 ,0.95)" }}>
                <h1 style={{ fontSize: "18px" }}>
                  ICYClub - Advanced Web Development
                </h1>
                I developed ICYClub for my third year dissertation and project
                as I had chosen Advanced Web Development. This was the first
                time I had ever built a web application and I saw it as a great
                opportunity to acquire skills with new programming languages,
                frameworks and design processes. ICYClub was designed with my
                passion for streetwear and fashion in mind with the intention to
                bring a combination of a social platform and an online clothing
                store for brands to advertise their products and gain traction.
                The site was based on an E-Commerce site, so I wanted to
                implement functionality such as payment gateways and account
                management, both developed using Ruby Libraries (Gems). I came
                with the idea of having “Gold” level users and authorization was
                implemented to distinguish standard, gold and admin users. As
                part of the Advanced Web Development module, I decided to
                research and implement internationalisation to the site,
                allowing users to change the language of the site so long as the
                language had been loaded. Further functionalities for users to
                add products to the site and customers to checkout these
                products were built. Extensive research on concepts which drove
                and assisted my Full Stack development is documented in my
                dissertation. The Website was developed with the Ruby on Rails
                Framework with a PostgreSQL database hosted on Heroku allowing
                remote access. GitHub was used for version control. TailwindCSS
                was used as the CSS framework. The Integrated Development
                Environment (IDE) used was RubyMine by JetBrains.
              </TxtM>
              <CloseM onClick={() => this.toggleMenu()}>x</CloseM>
            </Large>
          </LargeFull>
        )}
      </>
    );
  }
}

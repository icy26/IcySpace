import React from "react";
import { ContainerM, ContainerD, SlideD, TxtD } from "./CompElements";
import { Slider } from "components/proj/slides/Slider";
import MSTSlides from "components/proj/slides/compSlides/MSTSlides";
import RobotSlides from "components/proj/slides/compSlides/RobotSlides";
import GameSlides from "components/proj/slides/compSlides/GameSlides";
import AWDSlides from "components/proj/slides/compSlides/AWDSlides";
import RMSSlides from "components/proj/slides/compSlides/RMSSlides";
import { Space } from "components/proj/ProjElements";
import ProjSourcingTool from "./inspectProjM/ProjSourcingTool";
import ProjRobotics from "./inspectProjM/ProjRobotics";
import ProjGame from "./inspectProjM/ProjGame";
import ProjAWD from "./inspectProjM/ProjAWD";
import ProjRMS from "./inspectProjM/ProjRMS";

const Comp = () => {
  return (
    <>
      <Space>
        <ContainerD>
          <SlideD style={{ borderRadius: "30px 0px 0px 30px" }}>
            <Slider slides={MSTSlides} />
          </SlideD>
          <TxtD
            style={{
              borderRadius: "0px 30px 30px 0px",
              backgroundColor: "rgba(255, 251, 237 ,0.88)"
            }}
          >
            <h1 style={{ fontSize: "18px" }}> Masters Sourcing Tool </h1>I was
            employed by Masters Speciality Pharma to manage a large amount of
            data being sourced by different entities within the company and
            consolidate this information into an accessible system. The majority
            of data were supplier/manufacturer product lists and answered
            sourcing requests made by procurement and key account managers. The
            idea was to provide a central hub for users within the company to
            refer to if they needed further information on where to source
            medicines from. This started as just a conciliation of lists into a
            master table in excel and evolved to creating a macro enabled excel
            worksheet with VBA to practically automate the search for any
            required products. I created a search table which would narrow down
            the search for one particular product. This proved very useful for
            colleagues who needed to know where they could source a new product
            from. The ‘Big Search’ function searches every product from a list
            based on a simplified Active Pharmaceutical Ingredient and can
            perform a search on over 1000 products at once. The evolution of the
            application progressed to providing business intelligence
            information, pipelining information from the database of the
            company's ERP system from all entities internationally. This then
            can provide sales, purchase receipts and quotes made by the company
            for all products being searched. The development process was
            performed with Agile Methodology, launching the product to users on
            Teams whilst remaining in development to fix bugs and prototype new
            functionalities based on feedback from colleagues. One particular
            problem this industry faces is the naming convention of branded
            products and active pharmaceutical ingredients. Internationally API
            and brand names differ depending on the region and this becomes a
            big problem for data collection as the combinations are very vast.
            The sourcing tool encounters the same problem as the company
            receives product lists from manufacturers and distributors across
            the globe. This problem got me very interested in implementing deep
            learning neural networks to solve this problem within a system, and
            remains an interest of mine for the future.
          </TxtD>
        </ContainerD>

        <ContainerD>
          <TxtD
            style={{
              borderRadius: "30px 0px 0px 30px",
              backgroundColor: "rgba(255, 251, 237 ,0.88)"
            }}
          >
            <h1 style={{ fontSize: "18px" }}>
              {" "}
              ICYClub - Advanced Web Development{" "}
            </h1>
            I developed ICYClub for my third year dissertation and project as I
            had chosen Advanced Web Development. This was the first time I had
            ever built a web application and I saw it as a great opportunity to
            acquire skills with new programming languages, frameworks and design
            processes. ICYClub was designed with my passion for streetwear and
            fashion in mind with the intention to bring a combination of a
            social platform and an online clothing store for brands to advertise
            their products and gain traction. The site was based on an
            E-Commerce site, so I wanted to implement functionality such as
            payment gateways and account management, both developed using Ruby
            Libraries (Gems). I came with the idea of having “Gold” level users
            and authorization was implemented to distinguish standard, gold and
            admin users. As part of the Advanced Web Development module, I
            decided to research and implement internationalisation to the site,
            allowing users to change the language of the site so long as the
            language had been loaded. Further functionalities for users to add
            products to the site and customers to checkout these products were
            built. Extensive research on concepts which drove and assisted my
            Full Stack development is documented in my dissertation. The Website
            was developed with the Ruby on Rails Framework with a PostgreSQL
            database hosted on Heroku allowing remote access. GitHub was used
            for version control. TailwindCSS was used as the CSS framework. The
            Integrated Development Environment (IDE) used was RubyMine by
            JetBrains.
          </TxtD>
          <SlideD style={{ borderRadius: "0px 30px 30px 0px" }}>
            <Slider slides={AWDSlides} />
          </SlideD>
        </ContainerD>

        <ContainerD>
          <SlideD style={{ borderRadius: "30px 0px 0px 30px" }}>
            <Slider slides={RMSSlides} />
          </SlideD>
          <TxtD
            style={{
              borderRadius: "0px 30px 30px 0px",
              backgroundColor: "rgba(255, 251, 237 ,0.88)"
            }}
          >
            <h1 style={{ fontSize: "18px" }}>
              {" "}
              OAXACA - Team Software Development of a Restaurant Management
              System{" "}
            </h1>
            As part of our full stack team software development project in the
            2nd year of the degree, we were delegated teams and were tasked to
            build a restaurant management system using any programming language
            and UI framework of our choice. Naturally we chose to write the
            application in Java as this is the language that was taught at the
            university. JavaFx made a good fit as the UI framework as the
            entirety of the team was comfortable using designing with this. We
            were provided a specification of what was required from the
            application and the project as a whole. User stories for particular
            stakeholders were identified within the specification and these were
            distributed between members of the team to focus on how this would
            be designed and developed. The product included functionality such
            as authentication and authorization, a menu view and adding products
            to a basket, checkout passing the order to the kitchen view, a
            feedback page where the customers can review their experience and
            more. The development proceeded using an agile methodology using
            GitHub as the Version Control System. This process included
            scheduling ‘scrum meetings’ which were vital for our productivity
            and management as team members could analyse and provide feedback on
            current work, future plans and challenges. We would then focus on
            development in sub-teams where we would prototype functions, test
            them using Test Driven Development (TDD) and finalise the
            development ready to be merged into the production branch (master)
            of the project. This project taught me the importance of
            communication and successful team management in the production of an
            application. I built skills using version control within a team and
            managing development branches using agile methodology. Further
            information can be found in a downloaded ZIP folder.
          </TxtD>
        </ContainerD>

        <ContainerD>
          <TxtD
            style={{
              borderRadius: "30px 0px 0px 30px",
              backgroundColor: "rgba(255, 251, 237 ,0.88)"
            }}
          >
            <h1 style={{ fontSize: "20px" }}>
              Bridge Crossing Robot with Java
            </h1>
            One of the first projects that I had to undertake in university was
            to develop a working robot in the labs on campus within a small
            team. These teams of six were assigned to us and we were tasked to
            learn how to operate and code the robot within the first few weeks
            and later take the basics learned from the lab exercises to design
            and code a robot to perform a custom task of our choice.
            <div></div>
            The mechanics of the robot were built on the lego mindstorms base,
            using lego parts to put together the structure and moving parts of
            the robots. The software was developed on the EV3 block, however the
            operating system had been replaced with LeJOS, a java based
            operating system, meaning we could develop the code using Java and
            the EV3 block would handle it to control the robot.
            <div></div>
            After learning the basics, we met up as a team to decide what our
            robot will do and how we plan on designing it. The final decision
            was a “Bridge Crossing Robot”. We wanted the robot to go around a
            course following the lines, detect when a “gap” was present and then
            put down the bridge over the gap, cross it, and then pick it back up
            to complete the course. Colour sensors were used to detect the edges
            of the course, an ultrasound sensor to measure depth and gaps and
            large motors would have in-built range sensors to measure the
            rotating distance motors.
            <div></div>
            This project was very beneficial at advancing my java skills and
            overall problem solving skill. The opportunity to engage in a team
            for software development was very insightful to see how much
            development could advance with the many ideas and solutions being
            suggested. The robot performed just as planned by the time of the
            final demo and overall the project was successful.
          </TxtD>
          <SlideD style={{ borderRadius: "0px 30px 30px 0px" }}>
            <Slider slides={RobotSlides} />
          </SlideD>
        </ContainerD>

        <ContainerD>
          <SlideD style={{ borderRadius: "30px 0px 0px 30px" }}>
            <Slider slides={GameSlides} />
          </SlideD>
          <TxtD
            style={{
              borderRadius: "0px 30px 30px 0px",
              backgroundColor: "rgba(255, 251, 237 ,0.88)"
            }}
          >
            <h1 style={{ fontSize: "20px" }}>2D Game Project with Python</h1>
            The second team software development project in university was the
            gaming project. The layout of this was very similar to the robotics
            project in the sense that as a team we would learn the basics using
            lab exercises and would then be tasked to create our own 2D game.
            The difference was that we were required to use python as the
            programming language. This was the first time most students in the
            course including myself were tasked to use python for a software
            project and tested my ability to learn a new programming language
            within a short period of time.
            <div></div>
            The game the team decided to develop was going to be an infinite
            level platform based game with rounds. There were an unlimited
            number of rounds where the platform's position and size were
            generated randomly but also in relation to the round number (higher
            rounds increasing in difficulty). We also used spawned enemies
            randomly with the number of enemies also in relation to the round
            number, and the distance of the enemies spawning far a set distance
            away from the player to ensure a fair game. The objective was to
            achieve the highest round number, eliminate all the enemies and
            collect coins used to upgrade your weapon whilst only having 3
            lives. A boss enemy would also spawn every 4 or 5 rounds to switch
            up the tempo of the game. Background images and custom sprites were
            used to liven up the game.
            <div></div>
            The game project was great fun and allowed us to explore our
            creative side. The most useful part of this project was having to
            learn a new programming language whilst also developing with it and
            this has proved useful in future projects where I was required to
            learn new programming languages or techniques on the go.
          </TxtD>
        </ContainerD>

        <ContainerM style={{ marginTop: "40%" }}>
          <ProjSourcingTool />
          <ProjAWD />
        </ContainerM>

        <ContainerM style={{ marginTop: "10%" }}>
          <ProjRMS />
          <ProjRobotics />
        </ContainerM>

        <ContainerM style={{ marginTop: "10%" }}>
          <ProjGame />
        </ContainerM>
      </Space>
    </>
  );
};

export default Comp;

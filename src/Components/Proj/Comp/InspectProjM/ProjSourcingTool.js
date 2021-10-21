import React from "react";
import { CloseM } from "/src/Components/Proj/ProjElements";
import {
  Large,
  TxtM,
  InsButton,
  SlideM,
  ImgM,
  LargeFull
} from "../CompElements";
import { Slider } from "/src/Components/Proj/Slides/Slider";
import MSTSlides from "/src/Components/Proj/Slides/CompSlides/MSTSlides.js";
import Cover from "/src/Components/Images/Comp/CompCovers/SourcingToolCover.png";

export default class ProjSourcingTool extends React.Component {
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
          <ImgM src={Cover} />
        </InsButton>

        {isInspect && (
          <LargeFull>
            <Large>
              <SlideM>
                <Slider slides={MSTSlides} />
              </SlideM>
              <TxtM style={{ backgroundColor: "rgba(255, 255, 240 ,0.95)" }}>
                <h1 style={{ fontSize: "18px" }}> Masters Sourcing Tool </h1>I
                was employed by Masters Speciality Pharma to manage a large
                amount of data being sourced by different entities within the
                company and consolidate this information into an accessible
                system. The majority of data were supplier/manufacturer product
                lists and answered sourcing requests made by procurement and key
                account managers. The idea was to provide a central hub for
                users within the company to refer to if they needed further
                information on where to source medicines from. This started as
                just a conciliation of lists into a master table in excel and
                evolved to creating a macro enabled excel worksheet with VBA to
                practically automate the search for any required products. I
                created a search table which would narrow down the search for
                one particular product. This proved very useful for colleagues
                who needed to know where they could source a new product from.
                The ‘Big Search’ function searches every product from a list
                based on a simplified Active Pharmaceutical Ingredient and can
                perform a search on over 1000 products at once. The evolution of
                the application progressed to providing business intelligence
                information, pipelining information from the database of the
                company's ERP system from all entities internationally. This
                then can provide sales, purchase receipts and quotes made by the
                company for all products being searched. The development process
                was performed with Agile Methodology, launching the product to
                users on Teams whilst remaining in development to fix bugs and
                prototype new functionalities based on feedback from colleagues.
                One particular problem this industry faces is the naming
                convention of branded products and active pharmaceutical
                ingredients. Internationally API and brand names differ
                depending on the region and this becomes a big problem for data
                collection as the combinations are very vast. The sourcing tool
                encounters the same problem as the company receives product
                lists from manufacturers and distributors across the globe. This
                problem got me very interested in implementing deep learning
                neural networks to solve this problem within a system, and
                remains an interest of mine for the future.
              </TxtM>
              <CloseM onClick={() => this.toggleMenu()}>x</CloseM>
            </Large>
          </LargeFull>
        )}
      </>
    );
  }
}

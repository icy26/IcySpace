import React from "react";
import {
  InspectOptionBar,
  DropSurroundM,
  DropCont,
  DropOptions
} from "../CarElements";

export default class ProjDropDownOther extends React.Component {
  state = {
    Proj: "Aygo",
    isDropped: false
  };

  toggleDrop() {
    this.setState({ isDropped: !this.state.isDropped });
  }

  doBoth(para) {
    this.setState({ isDropped: !this.state.isDropped });
    this.props.chooseProj(para);
    this.setState({ Proj: para });
  }

  render() {
    const isDropped = this.state.isDropped;
    return (
      <>
        <InspectOptionBar onClick={() => this.toggleDrop()}>
          {this.state.Proj}
        </InspectOptionBar>

        {isDropped && (
          <>
            <DropSurroundM style={{ backgroundColor: "rgba(240,240,240,0.8" }}>
              <DropCont onClick={() => this.toggleDrop()}>
                {/* <DropOptions onClick={() => this.doBoth("Main")}>
                  MAIN
                </DropOptions> */}
                <DropOptions onClick={() => this.doBoth("Aygo")}>
                  AYGO PART OUT
                </DropOptions>
              </DropCont>
            </DropSurroundM>
          </>
        )}
      </>
    );
  }
}

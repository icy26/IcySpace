import React from "react";
import {
  InspectOptionBar,
  DropSurroundM,
  DropCont,
  DropOptions
} from "../CarElements";

export default class ProjDropDownE46 extends React.Component {
  state = {
    Proj: "MAIN",
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
              <DropCont>
                <DropOptions onClick={() => this.doBoth("Main")}>
                  MAIN
                </DropOptions>
                <DropOptions onClick={() => this.doBoth("susp")}>
                  STAGE 1.5 SUSPENSION
                </DropOptions>
                <DropOptions onClick={() => this.doBoth("Ccan")}>
                  CUSTOM CATCH CAN
                </DropOptions>
                <DropOptions onClick={() => this.doBoth("Ms")}>
                  SERVICE
                </DropOptions>
                <DropOptions onClick={() => this.doBoth("Refurb")}>
                  REFURB??
                </DropOptions>
              </DropCont>
            </DropSurroundM>
          </>
        )}
      </>
    );
  }
}

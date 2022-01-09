import React from "react";
import { Grid } from "semantic-ui-react";
import StepsDetailedChat from "./StepsDetailedChat";
import StepsDetailedHeader from "./StepsDetailedHeader";
import StepsDetailedInfo from "./StepsDetailedInfo";
import StepsDetailedSideBar from "./StepsDetailedSideBar";

const StepsDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <StepsDetailedHeader />
        <StepsDetailedInfo />
        <StepsDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <StepsDetailedSideBar />
      </Grid.Column>
    </Grid>
  );
};

export default StepsDetailedPage;

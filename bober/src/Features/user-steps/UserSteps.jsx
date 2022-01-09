import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "semantic-ui-react";
import "./usersteps.css";
import UserStepsList from "./UserStepsList";
const UserSteps = () => {
  const handleDelete = () => {};
  const handleEdit = () => {};

  return (
    <Grid>
      <Grid.Column width={10}>
        <UserStepsList />
      </Grid.Column>
      <Grid.Column width={6}>

      </Grid.Column>
    </Grid>
  );
};

export default UserSteps;

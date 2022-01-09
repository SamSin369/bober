import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import user from "../../resources/images/Profile.png";
import UserAttendee from "./UserAttendee";
import UserStepsList from "./UserStepsList";

const UserStepsItem = () => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={user} />
            <Item.Content>
              <Item.Header content="Event Title" />
              <Item.Description>Hosted By bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
          <span>
              <Icon name="clock"/> Date
              <Icon name="marker"/> Venue
          </span>
      </Segment>
      <Segment secondary>
          <List horizontal>
            <UserAttendee/>
            <UserAttendee/>
            <UserAttendee/>
            <UserAttendee/>
            <UserAttendee/>
            
          </List>
      </Segment>
      <Segment clearing>
          <div>Description of event</div>
          <Button color="teal" floated="right" content="View"/>
      </Segment>
    </Segment.Group>
  );
};

export default UserStepsItem;

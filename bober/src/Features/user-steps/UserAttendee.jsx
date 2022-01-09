import React from 'react'
import { Image, List } from 'semantic-ui-react'
import user from "../../resources/images/Profile.png";

const UserAttendee = () => {
    return (
        <List.Item>
            <Image size="mini" circular src={user}/>
        </List.Item>
    )
}

export default UserAttendee

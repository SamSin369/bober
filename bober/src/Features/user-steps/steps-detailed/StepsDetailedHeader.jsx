import React from 'react'
import { Button, Header, Image, Item, Segment } from 'semantic-ui-react'
import bober from "./../../../resources/images/beaver.jpg"

const StepsDetailedHeader = () => {
    const eventImageStyle = {
        filter: 'brightness(30%)'
    };
    
    const eventImageTextStyle = {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        width: '100%',
        height: 'auto',
        color: 'white'
    };
    return (
        <Segment.Group>
        <Segment basic attached="top" style={{padding: '0'}}>
            <Image src={bober} fluid style={eventImageStyle}/>
    
            <Segment style={eventImageTextStyle} basic>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Header
                                size="huge"
                                content='Event Title'
                                style={{color: 'white'}}
                            />
                            <p>Event Date</p>
                            <p>
                                Hosted by <strong>Bob</strong>
                            </p>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
        </Segment>
    
        <Segment attached="bottom">
            <Button>Cancel My Place</Button>
            <Button color="teal">JOIN THIS EVENT</Button>
    
            <Button color="orange" floated="right">
                Manage Event
            </Button>
        </Segment>
    </Segment.Group>
    
    )
}

export default StepsDetailedHeader

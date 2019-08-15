import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Button,Segment, Label } from 'semantic-ui-react'

export default ({ title, onOpenCreateModal }) => (
  <header className="header" style={{marginTop: 10,marginBottom: 20}}>
    <Container>
      <Segment clearing className="row">
        <Header as='h1' floated='left' style={{marginBottom: 0}}>
          {title}
        </Header>
        
        <Header as='h2' floated='right'>
          <Button 
            color="green" 
            onClick={() => onOpenCreateModal('createModalState', true)} 
          >
            Добавить
          </Button>
        </Header>
      </Segment>
      <Container>
        <Label>
          <Link to="/single">Another page</Link>
        </Label>
      </Container>
    </Container>
  </header>
)
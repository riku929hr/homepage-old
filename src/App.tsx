import { FC } from 'react';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
};

const App: FC = () => (
  <div>
    <Header
      as="h1"
      content="Responsive UI Examples"
      style={style.h1}
      textAlign="center"
    />
    <Header
      as="h2"
      content="Basic Responsive"
      style={style.h2}
      textAlign="center"
    />

    <Header as="h3" textAlign="center" style={style.h3} content="Container" />
    <Container>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

    <Header
      as="h3"
      content="Text Container"
      style={style.h3}
      textAlign="center"
    />
    <Container text>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

    <Header
      as="h3"
      content="Stackable Grid"
      textAlign="center"
      style={style.h3}
    />
    <Grid columns={2} stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Column width={10}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>
  </div>
);
export default App;

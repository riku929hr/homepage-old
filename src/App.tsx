import { FC } from 'react';
import { Header, Container, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import hatenablogLogo from './hatena-blog-logo-s.png';
import qiitaLogo from './qiita.png';

const style = {
  h1: {
    marginTop: '2em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  container: {
    margin: '2em',
  },
};

const App: FC = () => (
  <>
    <Header as="h1" style={style.h1} textAlign="center">
      riku(@riku929hr)
    </Header>

    <Container style={style.container} text fluid>
      <Header as="h2" dividing>
        自己紹介
      </Header>
      <p>Here is a Component</p>
    </Container>
    <Container style={style.container} text fluid>
      <Header as="h2" dividing>
        スキルなど
      </Header>
      <Header as="h3">プログラミング言語</Header>
      <Header as="h3">フレームワーク/ミドルウェア</Header>
      <Header as="h3">開発環境</Header>
      <Header as="h3">資格など</Header>
    </Container>
    <Container style={style.container} textAlign="center">
      <Header as="h2" textAlign="center">
        SNS
      </Header>
      <a href="https://twitter.com/riku929hr">
        <Icon name="twitter" size="big" link />
      </a>
      <a href="https://github.com/riku929hr">
        <Icon name="github" size="big" link color="black" />
      </a>

      <Image
        src={qiitaLogo}
        href="https://qiita.com/riku929hr"
        link
        avatar
        inline
      />
      <Image
        src={hatenablogLogo}
        href="https://riku929hr.hatenablog.com"
        avatar
        link
        inline
      />
    </Container>
  </>
);
export default App;

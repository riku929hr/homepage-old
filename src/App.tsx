import { FC } from 'react';
import { Header, Container, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { snsData } from './data/sns';
import SnsList from './components/SnsList';
import './App.css';
import icon from './icon.jpg';
// import hatenablogLogo from './hatena-blog-logo-s.png';
// import qiitaLogo from './qiita.png';

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
    marginBottom: '2em',
    padding: '2em 0',
  },
};

const App: FC = () => (
  <>
    <Header as="h1" style={style.h1} textAlign="center">
      <Image circular src={icon} />
      rikuto(@riku929hr)
    </Header>

    <Container style={style.container} text fluid>
      <Header as="h2" dividing>
        自己紹介
      </Header>
      <p>
        エンジニア@openlogi（2021.11〜） ← BizDev@SoftBank ←
        工学修士（ロボティクス）
        PHP/LaravelとReactを書いてます。趣味でホルン吹き。いいコードを書きたい。宮崎生まれ→福岡→仙台→東京
      </p>
    </Container>

    <Container style={style.container} text fluid>
      <Header as="h2">リンク</Header>
      <SnsList snses={snsData} />
    </Container>
  </>
);
export default App;

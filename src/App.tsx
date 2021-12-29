import { FC } from 'react';
import { Header, Container, Image } from 'semantic-ui-react';
import { snsData } from './data/sns';
import SnsList from './components/SnsList';
import icon from './icon.jpg';
import './App.css';

const App: FC = () => (
  <>
    <Header as="h1" textAlign="center">
      <Image circular src={icon} />
      rikuto(@riku929hr)
    </Header>

    <Container className="container" text fluid>
      <Header as="h2" dividing>
        自己紹介
      </Header>
      <p>
        エンジニア@openlogi（2021.11〜） ← BizDev@SoftBank ←
        工学修士（ロボティクス）
        PHP/LaravelとReactを書いてます。趣味でホルン吹き。いいコードを書きたい。宮崎生まれ→福岡→仙台→東京
      </p>
    </Container>

    <Container className="container" text fluid>
      <Header as="h2" dividing>
        リンク
      </Header>
      <SnsList snses={snsData} />
    </Container>
  </>
);
export default App;

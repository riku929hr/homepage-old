import { FC } from 'react';
import { Header, Container, Icon, Image, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import icon from './icon.jpg';
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
    marginBottom: '2em',
    padding: '2em 0',
  },
};

const App: FC = () => (
  <>
    <Header as="h1" style={style.h1} textAlign="center">
      <Image circular src={icon} />
      riku(@riku929hr)
    </Header>

    <Container style={style.container} text fluid>
      <Header as="h2" dividing>
        自己紹介
      </Header>
      <p>
        都内IT企業で事業開発を担当。戦略立案、BizDevを経験中。ロジカルシンキングが得意（だと思う）
      </p>
      <p>工学修士（ロボティクス）。社会人2年目の26歳。</p>
      <p>趣味はプログラミング、吹奏楽（ホルン）、ギターなど。</p>
    </Container>
    <Container style={style.container} text fluid>
      <Header as="h2" dividing>
        スキルなど
      </Header>
      <Header as="h3">プログラミング言語など</Header>
      <List bulleted>
        <List.Item>
          <List.Header>まあまあ</List.Header>
          <List.Description>C/C++, Python</List.Description>
        </List.Item>

        <List.Item>
          <List.Header>何となく</List.Header>
          <List.Description>
            JavaScript, TypeScript, React, ROS
          </List.Description>
        </List.Item>

        <List.Item>
          <List.Header>ちょっと使ったことある</List.Header>
          <List.Description>
            Django, BootStrap, PHP, WordPress, GCP
          </List.Description>
        </List.Item>
      </List>

      <Header as="h3">その他工学スキル</Header>
      <List bulleted>
        <List.Item>
          <List.Header>ロボット工学・制御工学</List.Header>
          <List.Description>
            大学/大学院では専門でした。趣味・学生研究レベルですが、ロボット製作経験あります。古典制御/現代制御、運動学など、ロボットに関する基本的な知識は持っているつもりです。
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header>3D CAD</List.Header>
          <List.Description>SolidWorksで設計経験あります</List.Description>
        </List.Item>
        <List.Item>
          <List.Header>マイコンなど</List.Header>
          <List.Description>
            Raspberry pi,
            Arduinoなど。回路設計の初歩くらいの知識は持ってるつもりです。
          </List.Description>
        </List.Item>
      </List>

      <Header as="h3">とった資格など</Header>
      <List bulleted>
        <List.Item>
          <List.Header>応用情報技術者</List.Header>
          <List.Description>2021.06</List.Description>
        </List.Item>
        <List.Item>
          <List.Header>基本情報技術者</List.Header>
          <List.Description>2021.03</List.Description>
        </List.Item>
        <List.Item>
          <List.Header>英検準1級</List.Header>
          <List.Description>2019.11</List.Description>
        </List.Item>
        <List.Item>
          <List.Header>TOEIC L&amp;R 875</List.Header>
          <List.Description>2018.11</List.Description>
        </List.Item>
      </List>
    </Container>
    <Container style={style.container} text fluid>
      <Header as="h2">リンク</Header>
      <List animated verticalAlign="middle">
        <List.Item as="a" href="https://twitter.com/riku929hr">
          <Icon name="twitter" size="big" link color="blue" />
          <List.Content>
            <List.Header>Twitter</List.Header>
          </List.Content>
        </List.Item>
        <List.Item as="a" href="https://github.com/riku929hr">
          <Icon name="github" size="big" link color="black" />
          <List.Content>
            <List.Header>GitHub</List.Header>
          </List.Content>
        </List.Item>
        <List.Item as="a" href="https://qiita.com/riku929hr">
          <Image src={qiitaLogo} link avatar />
          <List.Content>
            <List.Header>&nbsp; &nbsp;Qiita</List.Header>
          </List.Content>
        </List.Item>
        <List.Item as="a" href="https://riku929hr.hatenablog.com">
          <Image src={hatenablogLogo} link avatar />
          <List.Content>
            <List.Header>&nbsp; &nbsp;はてなブログ</List.Header>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  </>
);
export default App;

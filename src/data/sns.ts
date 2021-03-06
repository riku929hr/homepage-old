import twitterIcon from './icons/twitter.png';
import githubIcon from './icons/github.png';
import qiitaIcon from './icons/qiita.png';
import hatenaIcon from './icons/hatena.png';
import noteIcon from './icons/note.png';

export type Sns = {
  id: number;
  name: string;
  link: string;
  iconSrc?: string;
  description?: string;
};

export const snsData: Sns[] = [
  {
    id: 1,
    name: 'twitter',
    link: 'https://twitter.com/riku929hr',
    iconSrc: twitterIcon,
  },
  {
    id: 2,
    name: 'github',
    link: 'https://github.com/riku929hr',
    iconSrc: githubIcon,
  },
  {
    id: 3,
    name: 'Qiita',
    link: 'https://qiita.com/riku929hr',
    iconSrc: qiitaIcon,
  },
  {
    id: 4,
    name: 'Hatena Blog',
    link: 'https://riku929hr.hatenablog.com',
    iconSrc: hatenaIcon,
  },
  {
    id: 5,
    name: 'note',
    link: 'https://note.com/riku929hr',
    iconSrc: noteIcon,
  },
  {
    id: 6,
    name: 'YOUTRUST',
    link: 'https://youtrust.jp/users/riku929hr',
    description: '詳しい職務経歴はこちらに載せています。',
  },
];

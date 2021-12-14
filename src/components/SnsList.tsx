import { VFC } from 'react';
import { List, Image } from 'semantic-ui-react';
import { Sns } from '../data/sns';

type Props = { snses: Sns[] };

const SnsList: VFC<Props> = (props) => {
  const { snses } = props;

  return (
    <List selection verticalAlign="middle">
      {snses.map((snsItem) => (
        <List.Item key={snsItem.id} as="a" href={snsItem.link}>
          {snsItem.iconSrc && <Image src={snsItem.iconSrc} size="mini" />}
          <List.Content>
            <List.Header>{snsItem.name}</List.Header>
            {snsItem.description && (
              <List.Description>{snsItem.description}</List.Description>
            )}
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default SnsList;

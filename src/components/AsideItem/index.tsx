import { IPostData } from '../../api';
import {
  Container,
  Tag,
  Content,
  Title,
  Text,

} from './styles';

interface Props {
  data: IPostData;
}

export const AsideItem = ({ data }:Props) => (
  <Container>
    <Tag>
      <span>1824</span>
    </Tag>
    <Content>
      <Title>{data.title}</Title>
      <Text>{data.excerpt}</Text>
    </Content>

  </Container>
);

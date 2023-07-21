import { Item, Link, IconBox, Text } from './NavigationItem.styled';

// import { BsBook } from 'react-icons/bs';

const NavigationItem = ({ href, text, icon: Icon }) => {
  return (
    <Item>
      <Link href={href}>
        <IconBox>
          <Icon size={40}></Icon>
        </IconBox>
        <Text>{text}</Text>
      </Link>
    </Item>
  );
};

export default NavigationItem;

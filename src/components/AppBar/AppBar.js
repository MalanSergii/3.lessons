import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import { LeftBar } from './AppBar.styled';
import { BsBook, BsBookFill } from 'react-icons/bs';

const navLinks = [
  {
    href: '/univer',
    text: 'univer',
    icon: BsBook,
  },
  {
    href: '/fakultet',
    text: 'fakultet',
    icon: BsBookFill,
  },
];

const AppBar = () => {
  return (
    <LeftBar bgColor="red" className={css.appBar}>
      <Navigation css={css.navigation} links={navLinks}></Navigation>
      <UserMenu css={css.userMenu} user="Malan"></UserMenu>
    </LeftBar>
  );
};

export default AppBar;

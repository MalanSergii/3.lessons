import NavigationItem from 'components/NavigationItem';

const Navigation = ({ links, css }) => {
  return (
    <ul className={css}>
      {links.map(link => (
        <NavigationItem
          key={link.href}
          href={link.href}
          text={link.text}
          icon={link.icon}
        ></NavigationItem>
      ))}
    </ul>
  );
};

export default Navigation;

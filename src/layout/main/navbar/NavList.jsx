import NavItem from "../navbar/NavItem";
import MenuItem from "../../../menu-items";

function NavList() {
  return (
    <>
      {MenuItem.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          icon={item.icon}
          path={item.path}
          children={item.children}
        />
      ))}
    </>
  );
}

export default NavList;

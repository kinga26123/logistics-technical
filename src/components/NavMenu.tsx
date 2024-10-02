import menuItems from "../data/menu.json";

export const NavMenu: React.FC = () => {
  return (
    <ul className="nav-menu">
      {menuItems.data.map((item) => {
        return (
          <li key={item.title}>
            <a className="App-link" href={item.url}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

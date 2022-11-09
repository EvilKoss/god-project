import { NavigationStyled } from "./NavigationStyled";
import { NavLink } from "react-router-dom";

// interface ButtonProps {
//   title: string;
// }

// const Button = ({ title }: ButtonProps) => {
//   return <button>{title}</button>;
// };

// export default Button;

interface activeFnProps {
  isActive: boolean;
}

const Navigation = () => {
  const activeFn = ({ isActive }: activeFnProps) =>
    isActive ? "active-link" : "link";
  return (
    <NavigationStyled>
      <NavLink to="/" className={activeFn}>
        Counter
      </NavLink>
      <NavLink to="/creator" className={activeFn}>
        Creator
      </NavLink>
      <NavLink to="/characterSheet" className={activeFn}>
        Character sheet
      </NavLink>
      <NavLink to="/fight" className={activeFn}>
        Fight
      </NavLink>
      <NavLink to="/trade" className={activeFn}>
        Trade
      </NavLink>
      <NavLink to="/npc" className={activeFn}>
        NPC's
      </NavLink>
      <NavLink to="/quest" className={activeFn}>
        Quests
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;

import "./Header.scss";
import UserInfo from "./userInfo/UserInfo";

const Header = () => {
  return (
    <header className="bg-transparent header border-bottom">
      <a href="https://react.dev">
        <div className="header-logo"></div>
      </a>
      <h1>Task manager</h1>
      <UserInfo />
    </header>
  );
};

export default Header;

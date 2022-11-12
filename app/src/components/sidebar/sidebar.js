import "./sidebar.css";

export const SideNav = () => {
  return (
    <div className="sidenav">
      Barrett <br />
      Kowalsky
      <ul>
        <li>
          <a className="active" href="#home">
            portraits
          </a>
        </li>
        <li>
          <a href="#news">outside</a>
        </li>
        <li>
          <a href="#contact">architecture</a>
        </li>
        <li>
          <a href="#contact">nostalgia</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
      </ul>
    </div>
  );
};

import Header from "../header";
import style from "./main.module.scss";

const MainLayout = ({ children }) => (
  <div className={style.container}>
    <Header />

    <div className="content-wrapper">{children}</div>

  </div>
);

export default MainLayout;


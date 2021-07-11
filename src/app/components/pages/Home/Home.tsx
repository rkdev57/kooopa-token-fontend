import { FC } from "react";
import { TokenProgress, Intro, CoopaPhases } from "../../common";
import s from "./Home.module.scss";

const Home: FC = () => {
  return (
    <>
      <div className={s.commonGroup}>
        <TokenProgress />
        <Intro />
        <CoopaPhases />
      </div>
    </>
  );
};

export default Home;

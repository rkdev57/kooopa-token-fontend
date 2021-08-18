import { FC } from "react";
import { ClaimToken, CoopaPhases, Intro, TokenProgress } from "../../common";
import s from "./Home.module.scss";

const Home: FC = () => {
  return (
    <>
      <div className={s.commonGroup}>
        <ClaimToken />
        {/* <TokenProgress />
        <Intro />
        <CoopaPhases /> */}
      </div>
    </>
  );
};

export default Home;

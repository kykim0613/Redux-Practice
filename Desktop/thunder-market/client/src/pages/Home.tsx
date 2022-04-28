import styled from "styled-components";
import { IUser } from "../atoms";
import Banner from "../components/Banner";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import MainSlide from "../components/MainSlide";
import TodayProduct from "../components/TodayProduct";

const Wrapper = styled.div`
  min-width: 1236px;
`

const Home = ({isLogIn}: IUser) => {
  console.log(isLogIn)
  return (
    <Wrapper>
      <HeaderMenu isLogIn={isLogIn} />
      <Header isLogIn={isLogIn} />
      <div>
        <MainSlide />
        <Banner />
        <TodayProduct />
      </div>
    </Wrapper>
  );
};

export default Home;

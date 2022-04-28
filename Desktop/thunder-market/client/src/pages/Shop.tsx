import { useEffect } from "react";
import { IUser } from "../atoms";
import { Wrapper } from "../components/fundamental";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";

const Shop = ({isLogIn}: IUser) => {
  useEffect(() => {
    fetch("/user/info")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Wrapper>
      <HeaderMenu isLogIn={isLogIn} />
      <Header isLogIn={isLogIn} />
    </Wrapper>
  );
};

export default Shop;

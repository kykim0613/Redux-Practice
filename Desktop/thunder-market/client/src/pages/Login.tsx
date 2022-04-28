import { render } from "react-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IUser } from "../atoms";
import {
  Wrapper,
  Btn,
  BtnContainer,
  Form,
  Title,
  Error,
  IFormData,
} from "../components/fundamental";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";


const Login = ({ isLogIn }: IUser) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>();

  const onValid = ({ email, password }: IFormData) => {
    setValue("email", "");
    setValue("password", "");

    fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.result === "ok") {
          navigate("/")
        }
      });
  };

  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>Thunder Market | login</title>
        </Helmet>
      </HelmetProvider>
      <HeaderMenu isLogIn={isLogIn} />
      <Header isLogIn={isLogIn} />
      <Form onSubmit={handleSubmit(onValid)}>
        <Title>로그인</Title>
        <BtnContainer>
          <Btn style={{ backgroundColor: "#FEEC34", color: "black" }}>
            카카오 계정으로 로그인
          </Btn>
          <Btn style={{ backgroundColor: "black", color: "white" }}>
            깃헙 계정으로 로그인
          </Btn>
        </BtnContainer>

        <input
          placeholder="아이디 (e-mail)"
          type="email"
          {...register("email", {
            required: "ID 를 입력해주세요",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "올바르지 않은 이메일 형식입니다.",
            },
          })}
        />
        <Error>{errors.email?.message}</Error>
        <input
          placeholder="패스워드"
          type="password"
          {...register("password", { required: "비밀번호를 입력해주세요." })}
        />
        <Error>{errors.password?.message}</Error>

        <Btn style={{ marginTop: "20px" }}>로그인</Btn>
        <Btn>
          <Link to={`/join`}>
            회원가입
          </Link>
        </Btn>
      </Form>
    </Wrapper>
  );
};

export default Login;

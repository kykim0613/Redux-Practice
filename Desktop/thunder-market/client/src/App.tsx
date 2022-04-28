import { Helmet, HelmetProvider } from "react-helmet-async";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkState, IsLoggedIn, IUser, IUserObj } from "./atoms";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Login from "./pages/Login";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-family: 'Noto Sans KR', sans-serif;
  letter-spacing: -0.5px;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor}
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  text-decoration: none;
}
button {
  outline: none;
  border: 0;
  background-color: transparent;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
}
`;

const App = () => {
  const isDark = useRecoilValue(isDarkState);
  const [isLogIn, setIsLogIn] = useRecoilState(IsLoggedIn);
  const [userObj, setUserObj] = useState<IUserObj | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"])
  console.log(cookies.user)
  useEffect(() => {
    const user = cookies.user;
    if(user) {
      setIsLogIn(true)
    }
  }, [isLogIn])
  console.log(isLogIn)
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <HelmetProvider>
          <Helmet>
            <title>Thunder Market</title>
          </Helmet>
        </HelmetProvider>
        <GlobalStyle />
        <Router isLogIn={isLogIn} />
      </ThemeProvider>
    </>
  );
};

export default App;

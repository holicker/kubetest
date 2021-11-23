import client from "./client";

import qs from "qs";
const loginConfig = {
  headers: {
    Authorization: "Basic cmVhY3Q6c2VjcmV0",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

// 로그인
export const login = ({ username, password, grant_type }) =>
  client.post(
    `${process.env.AUTH}/oauth/token`,
    qs.stringify({
      username: username,
      password: password,
      grant_type: grant_type,
    }),
    loginConfig
  );

// 회원가입
export const register = ({ username, password, nickname }) =>
  client.post(`${process.env.AUTH}/member/register`, { username, password, nickname });

// 로그인 상태 확인
export const check = ({ access_token }) =>
  client.get(`${process.env.AUTH}/member/test`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });

export const logout = () => client.post(`${process.env.AUTH}/logout`);

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
    "http://a720cf46453834b6199cc5b70f8a9cd0-2049005872.ap-northeast-2.elb.amazonaws.com/oauth/token",
    qs.stringify({
      username: username,
      password: password,
      grant_type: grant_type,
    }),
    loginConfig
  );

// 회원가입
export const register = ({ username, password, nickname }) =>
  client.post("http://a720cf46453834b6199cc5b70f8a9cd0-2049005872.ap-northeast-2.elb.amazonaws.com/member/register", { username, password, nickname });

// 로그인 상태 확인
export const check = ({ access_token }) =>
  client.get("http://a720cf46453834b6199cc5b70f8a9cd0-2049005872.ap-northeast-2.elb.amazonaws.com/member/test", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

export const logout = () => client.post("http://a720cf46453834b6199cc5b70f8a9cd0-2049005872.ap-northeast-2.elb.amazonaws.com/logout");

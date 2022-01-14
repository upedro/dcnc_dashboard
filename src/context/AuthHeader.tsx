export default function authHeader() {
  const userStr = localStorage.getItem("dcnc_token");
  let user = null;
  if (userStr){
    return { Authorization: userStr };
  } else {
    return {};
  }
}
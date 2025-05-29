import React, { useState } from "react";
import logo from "../assets/logo.png";
import { login, signup } from "../firebase";
import netflix_spinner from "../assets/netflix_spinner.gif";
import { toast } from "react-toastify";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const usert_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign Up") {
      await signup(email, password, name);
    } else {
      await login(email, password);
    }
    setLoading(false);
  };
  const handleSignState = () => {
    setSignState((prev) => (prev === "Sign In" ? "Sign Up" : "Sign In"));
  };
  return loading ? (
    <div className="loginspinner w-full h-[100vh] flex justify-center items-center bg-[black]">
      <img className="w-16" src={netflix_spinner} alt="loading" />
    </div>
  ) : (
    <div className="login sm:py-3.5 sm:px-[5%] h-screen md:bg-[url('/netflix-clone/assets/background_banner.jpg')] py-[20px] px-[8%] ">
      <img src={logo} alt="logo" className="w-[150px]" />
      <div className="login-form sm:p-5 sm:mt-8 w-full md:max-w-[450px] bg-[#212121] bg-opacity-70 rounded-[5px] md:mx-auto md:p-14">
        <h1 className="text-3xl font-bold mb-7">{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 rounded-[4px] py-4 px-[10px] font-medium text-[16px]"
            />
          ) : (
            ""
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 rounded-[4px] py-4 px-[10px] font-medium text-[16px]"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 rounded-[4px] py-4 px-[10px] font-medium text-[16px]"
          />
          <button
            onClick={usert_auth}
            type="submit"
            className="w-full p-4 bg-[#e50914] text-white rounded-[4px] text-[16px] mt-5 cursor-pointer"
          >
            {signState}
          </button>
          <div className="form-help flex justify-between items-center  mt-5 text-[#b3b3b3] text-[13px]">
            <div className="remember flex gap-[5px] items-center">
              <input type="checkbox" className="w-[18px] h-[18px]" />
              <label type="checkbox">Remember Me</label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className="form-switch mt-10 text-[#737373]">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={handleSignState}
                className="ml-[6px] text-white cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={handleSignState}
                className="ml-[6px] text-white cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

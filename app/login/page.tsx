// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useLoginUserMutation } from "../store/features/todoApi";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const router = useRouter();
  // const [loginUser, { data, isError, error }] = useLoginUserMutation();
  // console.log(data);
  // console.log(data);
  // useEffect(() => {
  //   if (data) {
  //     setEmail("");
  //     setPassword("");
  //     router.push("/");
  //   }
  // }, [data, router]);
  // const handlelogin = async (e: any) => {
  //   e.preventDefault();
  //   await loginUser({ email, password });
  // };
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

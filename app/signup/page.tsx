// import { useEffect, useState } from "react";
// import { useCreateUserMutation } from "../store/features/todoApi";
// import { useRouter } from "next/navigation";
const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const router = useRouter();
  // const [createUser, { data, isError, error }] = useCreateUserMutation();
  // console.log(data);
  // useEffect(() => {
  //   if (data) {
  //     setEmail("");
  //     setPassword("");
  //     router.push("/");
  //   }
  // }, [data, router]);

  // const handleSignup = async (e: any) => {
  //   e.preventDefault();
  //   await createUser({ email, password });
  // };
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="Password" />
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;

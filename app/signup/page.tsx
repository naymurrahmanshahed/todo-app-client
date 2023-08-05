"use client";

import { useEffect, useState } from "react";
import { useCreateUserMutation } from "../store/features/todoApi";
import { useRouter } from "next/navigation";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [createUser, { data, isError, error }] = useCreateUserMutation();

  useEffect(() => {
    if (data && data.token) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin: true,
          token: data.token,
        })
      );
      setEmail("");
      setPassword("");
      router.push("/");
    }
  }, [data]);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    await createUser({ email, password });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSignup(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
          />
        </div>
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;

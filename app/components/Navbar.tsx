import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href={"/"} className="brand">
        TODO APP
      </Link>
      <nav>
        <div>
          <Link href={"/login"}>login</Link>
          <Link href={"/signup"}>signup</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

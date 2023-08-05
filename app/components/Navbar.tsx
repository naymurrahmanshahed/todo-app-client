import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href={"/"} className="brand">
        TODO APP
      </Link>
      <nav className="navmenu">
        {/* <div className="navlinks">
          <Link className="navlink" href={"/login"}>
            login
          </Link>
          <Link className="navlink" href={"/signup"}>
            signup
          </Link>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;

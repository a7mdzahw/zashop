import Link from "next/link";

const Topbar = () => {
  return (
    <nav className="navbar mb-2 navbar-dark navbar-expand bg-dark">
      <div className="container">
        <h1 className="navbar-brand mx-2">
          <Link href="/">
            <a className="nav-link">ZaShop</a>
          </Link>
        </h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/products">
              <a className="nav-link">products</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">about</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
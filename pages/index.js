import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZaShop</title>
      </Head>
      <main className="container">
        <div className="text-center home">
          <h1 className="display-2 text-dark">Welcome ZaShoppers</h1>
          <img src="/vercel.svg" alt="logo" className="img-fluid m-5" />
          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-outline-primary">
              <i className="bi bi-person-plus"></i> Sign In
            </button>
            <button className="btn btn-outline-warning">
              <i class="bi bi-person-circle"></i> Sign Up
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

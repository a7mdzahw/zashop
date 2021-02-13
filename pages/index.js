import Head from "next/head";
import { useState } from "react";

import ToastContainer from "../components/ToastContainer";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <>
      <Head>
        <title>ZaShop</title>
      </Head>
      <ToastContainer
        toasts={[
          {
            show: login,
            onClose: () => setLogin(false),
            title: "Login",
            msg: "Under Development Yet",
          },
          {
            show: signup,
            onClose: () => setSignup(false),
            title: "SignUp",
            msg: "Under Development Yet",
          },
        ]}
      />
      <main className="container">
        <div className="text-center home">
          <h1 className="display-2 text-dark">Welcome ZaShoppers</h1>
          <img src="/vercel.svg" alt="logo" className="img-fluid my-5" />
          <div className="d-flex gap-3 justify-content-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => setLogin(true)}
            >
              <i className="bi bi-person-plus"></i> Sign In
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => setSignup(true)}
            >
              <i className="bi bi-person-circle"></i> Sign Up
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

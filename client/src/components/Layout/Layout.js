import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <ToastContainer />
      <main style={{ minHeight: "76vh" }}>{children}</main>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title : "Ecommerce App",
  description : "Best place to shping",
  keywords : "Happy Shoping !"
}

export default Layout;

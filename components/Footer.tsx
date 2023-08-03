const Footer = () => {
  return (
    <footer className="bg-dark py-4 text-center">
      <div className="container bg-black">
        <p className="text-white">
          &copy; {new Date().getFullYear()} My Portfolio Sunil Kumar P. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

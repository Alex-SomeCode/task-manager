import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer bg-dark">
      <div className="footer-content">
      </div>
      <h5>All rights reserved. Task manager © ${year}</h5>
    </div>
  );
};

export default Footer;

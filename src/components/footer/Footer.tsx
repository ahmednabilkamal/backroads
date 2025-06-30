import { footerItemData } from "../../data/footerData";
import { FooterItem } from "../footerItem/FooterItem";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerItemData.map((item) => (
          <FooterItem href={item.href} title={item.title} />
        ))}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export { Footer };

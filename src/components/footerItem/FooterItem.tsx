type FooterLinkProps = {
  href: string;
  title: string;
};

const FooterItem = ({ href, title }: FooterLinkProps) => {
  return (
    <li>
      <a href={href} className="footer-link">
        {title}
      </a>
    </li>
  );
};

export { FooterItem };

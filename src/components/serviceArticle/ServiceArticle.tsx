type ServiceArticleProps = {
  title: string;
  description: string;
};

const ServiceArticle = ({ title, description }: ServiceArticleProps) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className="fas fa-wallet fa-fw"></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{description}</p>
      </div>
    </article>
  );
};

export { ServiceArticle };

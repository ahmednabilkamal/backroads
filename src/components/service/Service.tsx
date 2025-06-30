import { serviceArticleData } from "../../data/serviceData";
import { ServiceArticle } from "../serviceArticle/ServiceArticle";

const Service = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {serviceArticleData.map((item) => (
          <ServiceArticle description={item.description} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export { Service };

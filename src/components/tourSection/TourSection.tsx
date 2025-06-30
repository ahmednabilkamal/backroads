import { TourItemData } from "../../data/toursData";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { TourArticle } from "../tourArticle/TourArticle";

const TourSection = () => {
  return (
    <section className="section" id="tours">
      <SectionTitle title="featured" spanTitle="tours" />

      <div className="section-center featured-center">
        {TourItemData.map((item) => (
          <TourArticle
            date={item.date}
            days={item.days}
            info={item.info}
            map={item.map}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export { TourSection };

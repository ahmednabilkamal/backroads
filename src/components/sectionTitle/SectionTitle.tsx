type SectionTitleProps = {
  title: string;
  spanTitle: string;
};

const SectionTitle = ({ title, spanTitle }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{spanTitle}</span>
      </h2>
    </div>
  );
};

export { SectionTitle };

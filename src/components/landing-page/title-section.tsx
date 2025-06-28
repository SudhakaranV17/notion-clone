import React from "react";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pills: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pills,
}) => {
  return (
    <React.Fragment>
      <section>
        <div className="flex flex-col justify-center items-start md:items-center gap-4">
          <article className="dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple p-[1px] rounded-full text-sm">
            <div className="dark:bg-black px-3 py-1 rounded-full">{pills}</div>
          </article>
          {subheading ? (
            <>
              <h2 className="sm:max-w-[750px] font-semibold text-3xl sm:text-5xl text-left md:text-center">
                {title}
              </h2>
              <p className="sm:max-w-[450px] dark:text-washed-purple-700 md:text-center">
                {subheading}
              </p>
            </>
          ) : (
            <h1 className="sm:max-w-[850px] font-semibold text-4xl sm:text-6xl text-left md:text-center">
              {title}
            </h1>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default TitleSection;

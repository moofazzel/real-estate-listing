import SingleArticles from "@/components/singleArticles/SingleArticles";

const ArticlesTips = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SingleArticles />
        </div>
      </div>
    </section>
  );
};

export default ArticlesTips;

import BlogCard from "./BlogCard";
import "../style/BlogCards.css"
export default function BlogCards(prop) {
    console.log(prop.data)
  return (
    <div className="cards">
      {prop.data.map((card) => {
        return <BlogCard
          img={card.image}
          title={card.title}
          desc={card.description}
        />;
      })}
    </div>
  );
}

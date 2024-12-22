import Deals from "./ui/sections/Deals";
import Featured from "./ui/sections/Featured";
import Hero from "./ui/sections/Hero";
import Categories from "./ui/sections/Categories";
import Reviews from "./ui/sections/Reviews";
import NewsLetter from "./ui/sections/NewsLetter";
import Rating from "./ui/sections/Rating";

export default function Home() {
  return (
    <main >
      <Hero />
      <Featured/>
      <Deals />
      <Categories />
      <Reviews />
      <NewsLetter />
      <Rating/>
    </main>
  );
}

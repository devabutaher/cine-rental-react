import { getImgUrl } from "../utils/cineUtils";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const { cover, description, genre, id, price, rating, title } = movie;

  return (
    <figure
      key={id}
      className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
    >
      <img className="w-full object-cover" src={getImgUrl(cover)} alt="" />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{description}</p>
        <div className="flex items-center space-x-1 mb-5">
          {<Rating value={rating} />}
        </div>
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src="./assets/tag.svg" alt="" />
          <span>${price} | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MovieCard;

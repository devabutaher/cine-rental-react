import { useState } from "react";
import { getImgUrl } from "../utils/cineUtils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const { cover, description, genre, id, price, rating, title } = movie;

  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} setShowModal={setShowModal} />
      )}
      <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
        <img className="object-cover w-full" src={getImgUrl(cover)} alt="" />
        <figcaption className="pt-4">
          <h3 className="mb-1 text-xl">{title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{description}</p>
          <div className="flex items-center mb-5 space-x-1">
            {<Rating value={rating} />}
          </div>
          <button
            onClick={() => (setShowModal(true), setSelectedMovie(movie))}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm w-full"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${price} | Add to Cart</span>
          </button>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;

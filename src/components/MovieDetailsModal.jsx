import { getImgUrl } from "../utils/cineUtils";

const MovieDetailsModal = ({ movie, setShowModal }) => {
  const { cover, description, genre, id, price, rating, title } = movie;

  return (
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div class="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div class="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            class="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={getImgUrl(cover)}
            alt=""
          />
          <div class="p-5 lg:p-11">
            <div class="">
              <h2 class="text-3xl lg:text-6xl pb-4 font-bold">{title}</h2>
              <span class="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                {genre}
              </span>
              <div></div>
            </div>
            <p class="text-sm lg:text-base mb-8 lg:mb-16">{description}</p>
            <div class="grid lg:grid-cols-2 gap-2">
              <a
                class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>${price} | Add to Cart</span>
              </a>
              <button
                onClick={() => setShowModal(false)}
                class="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;

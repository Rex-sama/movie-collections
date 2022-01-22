import { Carousel } from "react-responsive-carousel";
import { fetchMovie, toogleHeader } from "../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function LandScapeMode({ base, movies, autoplay }) {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="pt-5">
      <Carousel
        autoPlay={autoplay ? true : false}
        infiniteLoop={autoplay ? true : false}
        centerMode={true}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
      >
        {movies?.map((item) => {
          return (
            <div
              className="px-2 bg-cover"
              key={item.id}
              onClick={() => {
                dispatch(fetchMovie(`/movie/${item.id}`));
                history.push(`/movie/${item.id}`);
                dispatch(toogleHeader(false));
              }}
            >
              <img
                className="rounded-lg"
                src={`${base?.secure_base_url}w500${item.backdrop_path}`}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default LandScapeMode;

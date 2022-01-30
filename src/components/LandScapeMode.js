import { Carousel } from "react-responsive-carousel";
import { fetchMovie, selectShow} from "../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function LandScapeMode({ base, movies, autoplay, tv }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSelectItem = (id) => {
    if (!tv) {
      dispatch(fetchMovie(`/movie/${id}`));
      history.push(`/movie/${id}`);
    } else {
      dispatch(selectShow(`/tv/${id}`));
      history.push(`/tv/${id}`);
    }
  };

  return (
    <div className="pt-3">
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
              onClick={() => onSelectItem(item.id)}
            >
              
              <img
                className="rounded-lg"
                src={`${base?.secure_base_url}w500${item.backdrop_path}`}
                alt={item.title}
              />
              <p className="text-sm">{item.title ? item.title : item.name}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default LandScapeMode;

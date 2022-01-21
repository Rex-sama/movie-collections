import { Carousel } from "react-responsive-carousel";

function LandScapeMode({ base, movies, autoplay }) {
  // secure_base_url
  // backdrop_path
  return (
    <div className="pt-5">
      <Carousel
        showThumbs={false}
        autoPlay={autoplay ? true : false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop={autoplay ? true : false}
        centerMode={true}
      >
        {movies?.map((item) => {
          return (
            <div className="px-2 bg-cover " key={item.id}>
              <img
                className="rounded-lg shadow-lg shadow-cyan-500/50 .."
                src={`${base?.secure_base_url}w780${item.backdrop_path}`}
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

import { Carousel } from "react-responsive-carousel";

function PortraitMode({ base, movies }) {
  console.log("popular", movies);
  return (
    <div className="pt-5 bg-gray-300">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        centerMode={true}
      >
        {movies?.map((item) => {
          return (
            <div className="px-2 bg-cover" key={item.id}>
              <img
                className="rounded-lg"
                src={`${base?.secure_base_url}h632${item.poster_path}`}
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

export default PortraitMode;

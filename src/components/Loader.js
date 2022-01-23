import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "200px" }}
    >
      <ThreeDots color="#01d277" height={90} width={90} />
    </div>
  );
}

export default Loader;

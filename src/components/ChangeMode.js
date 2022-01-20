import Switch from "react-switch";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

function ChangeMode({ darkMode, setDarkMode }) {
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed top-4 right-4">
      <Switch
        checkedIcon={
          <div className="flex justify-center items-center h-full">
            <BsMoonStarsFill className="text-2xl text-white" />
          </div>
        }
        uncheckedIcon={
          <div className="flex justify-center items-center h-full">
            <BsSunFill className="text-2xl text-yellow-400" />
          </div>
        }
        onChange={changeMode}
        checked={darkMode}
        height={35}
        width={70}
        offColor="#0069af"
        onColor="#007fd4"
      />
    </div>
  );
}

export default ChangeMode;

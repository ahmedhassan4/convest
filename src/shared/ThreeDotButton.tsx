import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { ActionIcon } from "rizzui";

const ThreeDotButton = () => {
  return (
    <button>
      <ActionIcon
        className="ms-auto bg-white"
        size="sm"
        variant="outline"
        rounded="lg">
        <PiDotsThreeVerticalBold className="size-4" />
      </ActionIcon>
    </button>
  );
};
export default ThreeDotButton;

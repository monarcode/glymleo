import {ArrowSquareLeft} from "iconsax-react";

export const PrevArrow = ({onClick}) => {
  return (
    <div
      className="z-20 absolute cursor-pointer left-0 top-[50%]"
      onClick={onClick}
    >
      <ArrowSquareLeft size="24" color="#ff6600"/>
    </div>
  );
};

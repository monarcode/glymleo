import {ArrowSquareRight} from "iconsax-react";

export const NextArrow = ({onClick}) => {
  return (
    <div
      className="z-20 absolute cursor-pointer right-0 top-[50%]"
      onClick={onClick}
    >
      <ArrowSquareRight size="24" color="#ff6600"/>
    </div>
  );
};

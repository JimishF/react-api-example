import React, { useMemo } from "react";

type ChipProps = {
  className?: string;
};
const Chip: React.FC<ChipProps> = ({
  className="",
  children,
}) => {
    const classNames= useMemo(()=>`my-0.5 mr-1 px-2 py-0.5 rounded-full bg-gray-200 text-xs flex align-center w-max cursor-pointer ${className} ` ,[className])
  return (
    <span data-testid="chip" className={classNames}>
      {children}
    </span>
  );
};

export default Chip;

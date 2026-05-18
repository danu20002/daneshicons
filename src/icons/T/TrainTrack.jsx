import React from 'react';

export const iconData = {
  id: "TrainTrack",
  name: "TrainTrack",
  category: "T",
  nodes: [["path",{"d":"M2 17 17 2"}],["path",{"d":"m2 14 8 8"}],["path",{"d":"m5 11 8 8"}],["path",{"d":"m8 8 8 8"}],["path",{"d":"m11 5 8 8"}],["path",{"d":"m14 2 8 8"}],["path",{"d":"M7 22 22 7"}]]
};

export const TrainTrack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M2 17 17 2" />
      <path d="m2 14 8 8" />
      <path d="m5 11 8 8" />
      <path d="m8 8 8 8" />
      <path d="m11 5 8 8" />
      <path d="m14 2 8 8" />
      <path d="M7 22 22 7" />
      {children}
    </svg>
  );
});

export default TrainTrack;

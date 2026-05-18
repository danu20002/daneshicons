import React from 'react';

export const iconData = {
  id: "ClockArrowUp",
  name: "ClockArrowUp",
  category: "C",
  nodes: [["path",{"d":"M12 6v6l1.56.78"}],["path",{"d":"M13.227 21.925a10 10 0 1 1 8.767-9.588"}],["path",{"d":"m14 18 4-4 4 4"}],["path",{"d":"M18 22v-8"}]]
};

export const ClockArrowUp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 6v6l1.56.78" />
      <path d="M13.227 21.925a10 10 0 1 1 8.767-9.588" />
      <path d="m14 18 4-4 4 4" />
      <path d="M18 22v-8" />
      {children}
    </svg>
  );
});

export default ClockArrowUp;

import React from 'react';

export const iconData = {
  id: "IceCream2",
  name: "IceCream2",
  category: "I",
  nodes: [["path",{"d":"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{"d":"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{"d":"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]
};

export const IceCream2 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" />
      <path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
      <path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
      {children}
    </svg>
  );
});

export default IceCream2;

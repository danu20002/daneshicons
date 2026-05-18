import React from 'react';

export const iconData = {
  id: "Tally1",
  name: "Tally1",
  category: "T",
  nodes: [["path",{"d":"M4 4v16"}]]
};

export const Tally1 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M4 4v16" />
      {children}
    </svg>
  );
});

export default Tally1;

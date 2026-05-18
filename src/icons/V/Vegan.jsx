import React from 'react';

export const iconData = {
  id: "Vegan",
  name: "Vegan",
  category: "V",
  nodes: [["path",{"d":"M16 8q6 0 6-6-6 0-6 6"}],["path",{"d":"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{"d":"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]]
};

export const Vegan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M16 8q6 0 6-6-6 0-6 6" />
      <path d="M17.41 3.59a10 10 0 1 0 3 3" />
      <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
      {children}
    </svg>
  );
});

export default Vegan;

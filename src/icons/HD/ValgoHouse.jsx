import React from 'react';

export const iconData = {
  "id": "ValgoHouse",
  "name": "ValgoHouse",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.02 2.42 L 18.25 4.48 L 21.78 12.20 L 17.94 19.77 L 9.63 21.49 L 3.11 16.06 L 3.28 7.58 Z"
      }
    ]
  ]
};

export const ValgoHouse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.02 2.42 L 18.25 4.48 L 21.78 12.20 L 17.94 19.77 L 9.63 21.49 L 3.11 16.06 L 3.28 7.58 Z" />
      {children}
    </svg>
  );
});

export default ValgoHouse;

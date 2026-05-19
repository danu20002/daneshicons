import React from 'react';

export const iconData = {
  "id": "YogurtWad",
  "name": "YogurtWad",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.92 4.29 L 18.07 5.74 L 19.83 15.84 L 10.77 20.63 L 3.41 13.50 Z"
      }
    ]
  ]
};

export const YogurtWad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.92 4.29 L 18.07 5.74 L 19.83 15.84 L 10.77 20.63 L 3.41 13.50 Z" />
      {children}
    </svg>
  );
});

export default YogurtWad;

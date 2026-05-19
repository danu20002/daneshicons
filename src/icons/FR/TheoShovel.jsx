import React from 'react';

export const iconData = {
  "id": "TheoShovel",
  "name": "TheoShovel",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.72 20.16 L 9.18 21.56 L 2.77 15.76 L 3.31 7.13 L 10.39 2.17 L 18.68 4.61 L 21.94 12.62 Z"
      }
    ]
  ]
};

export const TheoShovel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.72 20.16 L 9.18 21.56 L 2.77 15.76 L 3.31 7.13 L 10.39 2.17 L 18.68 4.61 L 21.94 12.62 Z" />
      {children}
    </svg>
  );
});

export default TheoShovel;

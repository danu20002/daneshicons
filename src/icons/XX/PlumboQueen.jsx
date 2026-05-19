import React from 'react';

export const iconData = {
  "id": "PlumboQueen",
  "name": "PlumboQueen",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.27 2.13 L 21.16 8.25 L 18.40 19.56 L 6.79 20.42 L 2.38 9.65 Z"
      }
    ]
  ]
};

export const PlumboQueen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.27 2.13 L 21.16 8.25 L 18.40 19.56 L 6.79 20.42 L 2.38 9.65 Z" />
      {children}
    </svg>
  );
});

export default PlumboQueen;

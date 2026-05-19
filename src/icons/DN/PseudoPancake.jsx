import React from 'react';

export const iconData = {
  "id": "PseudoPancake",
  "name": "PseudoPancake",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.42 19.20 L 8.47 12.72 L 3.12 7.97 L 10.22 8.87 L 13.09 2.31 L 14.43 9.34 L 21.56 10.04 L 15.28 13.49 L 16.81 20.48 L 11.60 15.58 Z"
      }
    ]
  ]
};

export const PseudoPancake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.42 19.20 L 8.47 12.72 L 3.12 7.97 L 10.22 8.87 L 13.09 2.31 L 14.43 9.34 L 21.56 10.04 L 15.28 13.49 L 16.81 20.48 L 11.60 15.58 Z" />
      {children}
    </svg>
  );
});

export default PseudoPancake;

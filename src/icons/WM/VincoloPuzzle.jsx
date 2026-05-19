import React from 'react';

export const iconData = {
  "id": "VincoloPuzzle",
  "name": "VincoloPuzzle",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.82 10.49 L 8.72 3.29 L 17.90 4.81 L 21.18 13.51 L 15.28 20.71 L 6.10 19.19 Z"
      }
    ]
  ]
};

export const VincoloPuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.82 10.49 L 8.72 3.29 L 17.90 4.81 L 21.18 13.51 L 15.28 20.71 L 6.10 19.19 Z" />
      {children}
    </svg>
  );
});

export default VincoloPuzzle;

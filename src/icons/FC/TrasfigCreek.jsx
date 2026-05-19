import React from 'react';

export const iconData = {
  "id": "TrasfigCreek",
  "name": "TrasfigCreek",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 12.00 a 2.46 2.46 0 1 0 4.92 0 a 2.46 2.46 0 1 0 -4.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 12.00 a 6.42 6.42 0 1 0 12.83 0 a 6.42 6.42 0 1 0 -12.83 0"
      }
    ]
  ]
};

export const TrasfigCreek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 12.00 a 2.46 2.46 0 1 0 4.92 0 a 2.46 2.46 0 1 0 -4.92 0" />
      <path d="M 5.58 12.00 a 6.42 6.42 0 1 0 12.83 0 a 6.42 6.42 0 1 0 -12.83 0" />
      {children}
    </svg>
  );
});

export default TrasfigCreek;

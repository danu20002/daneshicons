import React from 'react';

export const iconData = {
  "id": "ScintilOcean",
  "name": "ScintilOcean",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.64 21.18 L 10.57 17.14 L 5.85 19.01 L 7.09 14.08 L 2.69 11.56 L 7.31 9.46 L 6.54 4.44 L 11.06 6.75 L 14.50 3.02 L 15.52 7.99 L 20.58 8.36 L 17.33 12.25 L 20.20 16.44 L 15.13 16.32 Z"
      }
    ]
  ]
};

export const ScintilOcean = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.64 21.18 L 10.57 17.14 L 5.85 19.01 L 7.09 14.08 L 2.69 11.56 L 7.31 9.46 L 6.54 4.44 L 11.06 6.75 L 14.50 3.02 L 15.52 7.99 L 20.58 8.36 L 17.33 12.25 L 20.20 16.44 L 15.13 16.32 Z" />
      {children}
    </svg>
  );
});

export default ScintilOcean;

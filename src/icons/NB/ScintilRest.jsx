import React from 'react';

export const iconData = {
  "id": "ScintilRest",
  "name": "ScintilRest",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.92 3.10 L 16.52 8.69 L 21.67 10.94 L 17.13 14.26 L 17.75 19.84 L 12.61 17.57 L 8.08 20.90 L 7.48 15.31 L 2.33 13.06 L 6.87 9.74 L 6.25 4.16 L 11.39 6.43 Z"
      }
    ]
  ]
};

export const ScintilRest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.92 3.10 L 16.52 8.69 L 21.67 10.94 L 17.13 14.26 L 17.75 19.84 L 12.61 17.57 L 8.08 20.90 L 7.48 15.31 L 2.33 13.06 L 6.87 9.74 L 6.25 4.16 L 11.39 6.43 Z" />
      {children}
    </svg>
  );
});

export default ScintilRest;

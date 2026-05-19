import React from 'react';

export const iconData = {
  "id": "ScotoMuffin",
  "name": "ScotoMuffin",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 12.36 L 14.47 20.80 L 4.40 17.07 L 4.83 6.34 L 15.17 3.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.64 14.34 L 11.52 18.09 L 6.06 13.42 L 8.81 6.79 L 15.97 7.36 Z"
      }
    ]
  ]
};

export const ScotoMuffin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 12.36 L 14.47 20.80 L 4.40 17.07 L 4.83 6.34 L 15.17 3.43 Z" />
      <path d="M 17.64 14.34 L 11.52 18.09 L 6.06 13.42 L 8.81 6.79 L 15.97 7.36 Z" />
      {children}
    </svg>
  );
});

export default ScotoMuffin;

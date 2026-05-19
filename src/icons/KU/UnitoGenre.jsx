import React from 'react';

export const iconData = {
  "id": "UnitoGenre",
  "name": "UnitoGenre",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 7.97 L 9.71 2.67 L 17.87 4.40 L 21.60 11.84 L 18.11 19.41 L 10.02 21.40 L 3.42 16.31 Z"
      }
    ]
  ]
};

export const UnitoGenre = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 7.97 L 9.71 2.67 L 17.87 4.40 L 21.60 11.84 L 18.11 19.41 L 10.02 21.40 L 3.42 16.31 Z" />
      {children}
    </svg>
  );
});

export default UnitoGenre;

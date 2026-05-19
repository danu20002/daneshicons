import React from 'react';

export const iconData = {
  "id": "LattroPerfume",
  "name": "LattroPerfume",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.40 10.71 L 17.63 13.48 L 19.56 17.74 L 14.94 17.03 L 13.29 21.40 L 10.52 17.63 L 6.26 19.56 L 6.97 14.94 L 2.60 13.29 L 6.37 10.52 L 4.44 6.26 L 9.06 6.97 L 10.71 2.60 L 13.48 6.37 L 17.74 4.44 L 17.03 9.06 Z"
      }
    ]
  ]
};

export const LattroPerfume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.40 10.71 L 17.63 13.48 L 19.56 17.74 L 14.94 17.03 L 13.29 21.40 L 10.52 17.63 L 6.26 19.56 L 6.97 14.94 L 2.60 13.29 L 6.37 10.52 L 4.44 6.26 L 9.06 6.97 L 10.71 2.60 L 13.48 6.37 L 17.74 4.44 L 17.03 9.06 Z" />
      {children}
    </svg>
  );
});

export default LattroPerfume;

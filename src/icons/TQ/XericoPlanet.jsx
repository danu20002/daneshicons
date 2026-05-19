import React from 'react';

export const iconData = {
  "id": "XericoPlanet",
  "name": "XericoPlanet",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.15 3.94 L 11.42 6.40 L 16.06 2.90 L 16.56 8.69 L 21.91 10.97 L 17.14 14.29 L 17.85 20.06 L 12.58 17.60 L 7.94 21.10 L 7.44 15.31 L 2.09 13.03 L 6.86 9.71 Z"
      }
    ]
  ]
};

export const XericoPlanet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.15 3.94 L 11.42 6.40 L 16.06 2.90 L 16.56 8.69 L 21.91 10.97 L 17.14 14.29 L 17.85 20.06 L 12.58 17.60 L 7.94 21.10 L 7.44 15.31 L 2.09 13.03 L 6.86 9.71 Z" />
      {children}
    </svg>
  );
});

export default XericoPlanet;

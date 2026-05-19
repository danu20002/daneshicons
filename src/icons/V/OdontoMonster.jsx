import React from 'react';

export const iconData = {
  "id": "OdontoMonster",
  "name": "OdontoMonster",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.59 4.41 L 13.50 3.35 L 18.71 6.34 L 20.78 11.98 L 18.74 17.63 L 13.55 20.64 L 7.63 19.61 L 3.76 15.02 L 3.74 9.02 Z"
      }
    ]
  ]
};

export const OdontoMonster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.59 4.41 L 13.50 3.35 L 18.71 6.34 L 20.78 11.98 L 18.74 17.63 L 13.55 20.64 L 7.63 19.61 L 3.76 15.02 L 3.74 9.02 Z" />
      {children}
    </svg>
  );
});

export default OdontoMonster;

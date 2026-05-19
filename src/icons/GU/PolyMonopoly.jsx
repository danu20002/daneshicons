import React from 'react';

export const iconData = {
  "id": "PolyMonopoly",
  "name": "PolyMonopoly",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.05 7.79 L 14.54 9.13 L 10.66 9.66 L 11.50 12.65 L 8.66 8.01 L 15.71 20.15 L 18.79 15.29"
      }
    ],
    [
      "path",
      {
        "d": "M 11.46 15.51 L 15.54 6.40 L 6.23 10.43"
      }
    ]
  ]
};

export const PolyMonopoly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.05 7.79 L 14.54 9.13 L 10.66 9.66 L 11.50 12.65 L 8.66 8.01 L 15.71 20.15 L 18.79 15.29" />
      <path d="M 11.46 15.51 L 15.54 6.40 L 6.23 10.43" />
      {children}
    </svg>
  );
});

export default PolyMonopoly;

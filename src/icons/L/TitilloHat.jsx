import React from 'react';

export const iconData = {
  "id": "TitilloHat",
  "name": "TitilloHat",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.11 10.00 L 13.11 10.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.18 10.50 L 13.18 13.96"
      }
    ],
    [
      "path",
      {
        "d": "M 11.71 15.50 L 9.71 12.04"
      }
    ]
  ]
};

export const TitilloHat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.11 10.00 L 13.11 10.00" />
      <path d="M 15.18 10.50 L 13.18 13.96" />
      <path d="M 11.71 15.50 L 9.71 12.04" />
      {children}
    </svg>
  );
});

export default TitilloHat;

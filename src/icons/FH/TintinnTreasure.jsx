import React from 'react';

export const iconData = {
  "id": "TintinnTreasure",
  "name": "TintinnTreasure",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.23 7.94 L 12.23 7.94"
      }
    ],
    [
      "path",
      {
        "d": "M 17.40 10.77 L 15.40 14.23"
      }
    ],
    [
      "path",
      {
        "d": "M 10.36 17.29 L 8.36 13.83"
      }
    ]
  ]
};

export const TintinnTreasure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.23 7.94 L 12.23 7.94" />
      <path d="M 17.40 10.77 L 15.40 14.23" />
      <path d="M 10.36 17.29 L 8.36 13.83" />
      {children}
    </svg>
  );
});

export default TintinnTreasure;

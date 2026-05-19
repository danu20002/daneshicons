import React from 'react';

export const iconData = {
  "id": "TrinitroFold",
  "name": "TrinitroFold",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.96 11.15 L 14.96 11.15"
      }
    ],
    [
      "path",
      {
        "d": "M 13.26 11.53 L 11.26 14.99"
      }
    ],
    [
      "path",
      {
        "d": "M 11.78 13.33 L 9.78 9.86"
      }
    ]
  ]
};

export const TrinitroFold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.96 11.15 L 14.96 11.15" />
      <path d="M 13.26 11.53 L 11.26 14.99" />
      <path d="M 11.78 13.33 L 9.78 9.86" />
      {children}
    </svg>
  );
});

export default TrinitroFold;

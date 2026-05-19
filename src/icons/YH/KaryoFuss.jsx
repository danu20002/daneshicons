import React from 'react';

export const iconData = {
  "id": "KaryoFuss",
  "name": "KaryoFuss",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.24 11.55 L 15.24 11.55"
      }
    ],
    [
      "path",
      {
        "d": "M 12.77 11.56 L 10.77 15.03"
      }
    ],
    [
      "path",
      {
        "d": "M 11.99 12.89 L 9.99 9.42"
      }
    ]
  ]
};

export const KaryoFuss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.24 11.55 L 15.24 11.55" />
      <path d="M 12.77 11.56 L 10.77 15.03" />
      <path d="M 11.99 12.89 L 9.99 9.42" />
      {children}
    </svg>
  );
});

export default KaryoFuss;

import React from 'react';

export const iconData = {
  "id": "TortiClamp",
  "name": "TortiClamp",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.43 9.56 L 14.43 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 14.90 11.86 L 12.90 15.32"
      }
    ],
    [
      "path",
      {
        "d": "M 10.68 14.58 L 8.68 11.12"
      }
    ]
  ]
};

export const TortiClamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.43 9.56 L 14.43 9.56" />
      <path d="M 14.90 11.86 L 12.90 15.32" />
      <path d="M 10.68 14.58 L 8.68 11.12" />
      {children}
    </svg>
  );
});

export default TortiClamp;

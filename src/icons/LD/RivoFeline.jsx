import React from 'react';

export const iconData = {
  "id": "RivoFeline",
  "name": "RivoFeline",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.03 7.16 L 13.03 7.16"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 11.85 L 15.68 15.32"
      }
    ],
    [
      "path",
      {
        "d": "M 9.29 16.99 L 7.29 13.53"
      }
    ]
  ]
};

export const RivoFeline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.03 7.16 L 13.03 7.16" />
      <path d="M 17.68 11.85 L 15.68 15.32" />
      <path d="M 9.29 16.99 L 7.29 13.53" />
      {children}
    </svg>
  );
});

export default RivoFeline;

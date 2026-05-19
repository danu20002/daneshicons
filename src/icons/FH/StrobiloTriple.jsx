import React from 'react';

export const iconData = {
  "id": "StrobiloTriple",
  "name": "StrobiloTriple",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.25 7.68 L 15.25 7.68"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 13.51 L 14.12 16.97"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 14.81 L 6.63 11.35"
      }
    ]
  ]
};

export const StrobiloTriple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.25 7.68 L 15.25 7.68" />
      <path d="M 16.12 13.51 L 14.12 16.97" />
      <path d="M 8.63 14.81 L 6.63 11.35" />
      {children}
    </svg>
  );
});

export default StrobiloTriple;

import React from 'react';

export const iconData = {
  "id": "OcciGrand",
  "name": "OcciGrand",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 5.40 L 20.77 5.40 L 20.77 18.60 L 3.23 18.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 5.40 L 7.40 1.23 L 24.94 1.23 L 20.77 5.40"
      }
    ],
    [
      "path",
      {
        "d": "M 20.77 5.40 L 24.94 1.23 L 24.94 14.43 L 20.77 18.60"
      }
    ]
  ]
};

export const OcciGrand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 5.40 L 20.77 5.40 L 20.77 18.60 L 3.23 18.60 Z" />
      <path d="M 3.23 5.40 L 7.40 1.23 L 24.94 1.23 L 20.77 5.40" />
      <path d="M 20.77 5.40 L 24.94 1.23 L 24.94 14.43 L 20.77 18.60" />
      {children}
    </svg>
  );
});

export default OcciGrand;

import React from 'react';

export const iconData = {
  "id": "PsychoRudder",
  "name": "PsychoRudder",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.90 15.11 L 13.75 21.26 L 4.85 18.15 L 3.10 8.89 L 10.25 2.74 L 19.15 5.85 Z"
      }
    ]
  ]
};

export const PsychoRudder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.90 15.11 L 13.75 21.26 L 4.85 18.15 L 3.10 8.89 L 10.25 2.74 L 19.15 5.85 Z" />
      {children}
    </svg>
  );
});

export default PsychoRudder;

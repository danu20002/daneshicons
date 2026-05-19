import React from 'react';

export const iconData = {
  "id": "ZampognaCredit",
  "name": "ZampognaCredit",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.32 4.62 L 7.88 15.70"
      }
    ],
    [
      "path",
      {
        "d": "M 21.42 5.36 L 12.85 17.19 L 18.55 20.21 L 18.30 4.80 L 13.24 21.11 L 15.53 20.30 L 20.43 9.16"
      }
    ]
  ]
};

export const ZampognaCredit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.32 4.62 L 7.88 15.70" />
      <path d="M 21.42 5.36 L 12.85 17.19 L 18.55 20.21 L 18.30 4.80 L 13.24 21.11 L 15.53 20.30 L 20.43 9.16" />
      {children}
    </svg>
  );
});

export default ZampognaCredit;

import React from 'react';

export const iconData = {
  "id": "ZeoPhone",
  "name": "ZeoPhone",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 12.00 L 20.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.75 L 12.00 20.25"
      }
    ],
    [
      "path",
      {
        "d": "M 2.52 12.00 a 9.48 9.48 0 1 0 18.96 0 a 9.48 9.48 0 1 0 -18.96 0"
      }
    ]
  ]
};

export const ZeoPhone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 12.00 L 20.25 12.00" />
      <path d="M 12.00 3.75 L 12.00 20.25" />
      <path d="M 2.52 12.00 a 9.48 9.48 0 1 0 18.96 0 a 9.48 9.48 0 1 0 -18.96 0" />
      {children}
    </svg>
  );
});

export default ZeoPhone;

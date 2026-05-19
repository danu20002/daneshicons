import React from 'react';

export const iconData = {
  "id": "PlenoField",
  "name": "PlenoField",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.44 6.30 L 14.44 6.30"
      }
    ],
    [
      "path",
      {
        "d": "M 17.72 13.50 L 15.72 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 16.20 L 5.84 12.74"
      }
    ]
  ]
};

export const PlenoField = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.44 6.30 L 14.44 6.30" />
      <path d="M 17.72 13.50 L 15.72 16.96" />
      <path d="M 7.84 16.20 L 5.84 12.74" />
      {children}
    </svg>
  );
});

export default PlenoField;

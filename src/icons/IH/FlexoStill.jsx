import React from 'react';

export const iconData = {
  "id": "FlexoStill",
  "name": "FlexoStill",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.60 12.00 L 16.40 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 12.00 L 10.61 10.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 12.00 L 10.61 13.81"
      }
    ]
  ]
};

export const FlexoStill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.60 12.00 L 16.40 12.00" />
      <path d="M 7.60 12.00 L 10.61 10.19" />
      <path d="M 7.60 12.00 L 10.61 13.81" />
      {children}
    </svg>
  );
});

export default FlexoStill;

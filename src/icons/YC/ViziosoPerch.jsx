import React from 'react';

export const iconData = {
  "id": "ViziosoPerch",
  "name": "ViziosoPerch",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 12.00 a 4.97 4.97 0 1 0 9.93 0 a 4.97 4.97 0 1 0 -9.93 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0"
      }
    ]
  ]
};

export const ViziosoPerch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0" />
      <path d="M 7.03 12.00 a 4.97 4.97 0 1 0 9.93 0 a 4.97 4.97 0 1 0 -9.93 0" stroke-dasharray="4 2" />
      <path d="M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0" />
      {children}
    </svg>
  );
});

export default ViziosoPerch;

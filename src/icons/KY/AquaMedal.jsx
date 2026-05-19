import React from 'react';

export const iconData = {
  "id": "AquaMedal",
  "name": "AquaMedal",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 0 12.45 0 a 6.22 6.22 0 1 0 -12.45 0"
      }
    ]
  ]
};

export const AquaMedal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0" stroke-dasharray="5 2" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 0 12.45 0 a 6.22 6.22 0 1 0 -12.45 0" />
      {children}
    </svg>
  );
});

export default AquaMedal;

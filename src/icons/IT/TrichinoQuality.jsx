import React from 'react';

export const iconData = {
  "id": "TrichinoQuality",
  "name": "TrichinoQuality",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 0 12.13 0 a 6.07 6.07 0 1 0 -12.13 0",
        "stroke-dasharray": "4 3"
      }
    ]
  ]
};

export const TrichinoQuality = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 0 12.13 0 a 6.07 6.07 0 1 0 -12.13 0" stroke-dasharray="4 3" />
      {children}
    </svg>
  );
});

export default TrichinoQuality;

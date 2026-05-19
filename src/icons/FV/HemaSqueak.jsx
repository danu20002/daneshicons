import React from 'react';

export const iconData = {
  "id": "HemaSqueak",
  "name": "HemaSqueak",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 12.00 a 2.42 2.42 0 1 0 4.85 0 a 2.42 2.42 0 1 0 -4.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 12.00 a 5.13 5.13 0 1 0 10.26 0 a 5.13 5.13 0 1 0 -10.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.26 12.00 a 7.74 7.74 0 1 0 15.49 0 a 7.74 7.74 0 1 0 -15.49 0"
      }
    ]
  ]
};

export const HemaSqueak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 12.00 a 2.42 2.42 0 1 0 4.85 0 a 2.42 2.42 0 1 0 -4.85 0" />
      <path d="M 6.87 12.00 a 5.13 5.13 0 1 0 10.26 0 a 5.13 5.13 0 1 0 -10.26 0" />
      <path d="M 4.26 12.00 a 7.74 7.74 0 1 0 15.49 0 a 7.74 7.74 0 1 0 -15.49 0" />
      {children}
    </svg>
  );
});

export default HemaSqueak;

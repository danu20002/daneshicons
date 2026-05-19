import React from 'react';

export const iconData = {
  "id": "SurgeExpect",
  "name": "SurgeExpect",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.64 17.42 L 10.70 5.14 L 11.66 15.23 L 9.17 16.74 L 4.77 16.70 L 6.28 7.35 L 9.56 15.77 L 12.74 8.21"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 20.58 L 20.29 12.84"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 9.35 Q 18.89 3.63 4.85 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 19.74 15.88 L 3.52 7.40 L 11.81 18.65 L 5.21 7.56"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 12.00 A 6.35 3.35 99 0 0 17.02 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 9.34 Q 6.20 4.80 20.91 15.70"
      }
    ]
  ]
};

export const SurgeExpect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.64 17.42 L 10.70 5.14 L 11.66 15.23 L 9.17 16.74 L 4.77 16.70 L 6.28 7.35 L 9.56 15.77 L 12.74 8.21" />
      <path d="M 17.88 20.58 L 20.29 12.84" />
      <path d="M 3.72 9.35 Q 18.89 3.63 4.85 16.68" />
      <path d="M 19.74 15.88 L 3.52 7.40 L 11.81 18.65 L 5.21 7.56" />
      <path d="M 17.85 12.00 A 6.35 3.35 99 0 0 17.02 20.70" />
      <path d="M 4.96 9.34 Q 6.20 4.80 20.91 15.70" />
      {children}
    </svg>
  );
});

export default SurgeExpect;

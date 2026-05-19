import React from 'react';

export const iconData = {
  "id": "StatoBlaze",
  "name": "StatoBlaze",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 6.32 C 19.88 5.66, 18.97 14.70, 20.78 14.77"
      }
    ],
    [
      "path",
      {
        "d": "M 20.60 18.76 L 7.18 10.03"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 14.57 L 16.05 5.27"
      }
    ],
    [
      "path",
      {
        "d": "M 17.11 6.62 L 16.85 11.60 L 5.26 17.55 L 20.56 13.48 L 20.33 2.63 L 16.90 6.06 L 10.43 18.68"
      }
    ]
  ]
};

export const StatoBlaze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 6.32 C 19.88 5.66, 18.97 14.70, 20.78 14.77" />
      <path d="M 20.60 18.76 L 7.18 10.03" />
      <path d="M 6.66 14.57 L 16.05 5.27" />
      <path d="M 17.11 6.62 L 16.85 11.60 L 5.26 17.55 L 20.56 13.48 L 20.33 2.63 L 16.90 6.06 L 10.43 18.68" />
      {children}
    </svg>
  );
});

export default StatoBlaze;

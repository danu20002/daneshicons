import React from 'react';

export const iconData = {
  "id": "ValicoRandom",
  "name": "ValicoRandom",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.33 3.73 L 6.84 4.44 L 5.70 2.80 L 2.82 1.00 L 1.95 1.00 L 1.00 3.68 L 3.82 2.49 L 3.20 3.11 L 5.29 2.01 L 7.25 4.78 L 5.13 6.61 L 4.26 9.47 L 7.12 10.58 L 9.65 7.99 L 11.56 7.74 L 10.13 6.74"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 7.27 L 10.22 6.35 L 7.42 5.03 L 8.53 7.98 L 8.95 7.82 L 8.77 8.67 L 7.51 10.20 L 5.96 8.51 L 5.93 7.99 L 4.40 7.22 L 6.40 7.91 L 7.31 8.74 L 7.39 7.42 L 4.91 7.53 L 7.85 5.95 L 4.95 6.58"
      }
    ]
  ]
};

export const ValicoRandom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.33 3.73 L 6.84 4.44 L 5.70 2.80 L 2.82 1.00 L 1.95 1.00 L 1.00 3.68 L 3.82 2.49 L 3.20 3.11 L 5.29 2.01 L 7.25 4.78 L 5.13 6.61 L 4.26 9.47 L 7.12 10.58 L 9.65 7.99 L 11.56 7.74 L 10.13 6.74" />
      <path d="M 10.88 7.27 L 10.22 6.35 L 7.42 5.03 L 8.53 7.98 L 8.95 7.82 L 8.77 8.67 L 7.51 10.20 L 5.96 8.51 L 5.93 7.99 L 4.40 7.22 L 6.40 7.91 L 7.31 8.74 L 7.39 7.42 L 4.91 7.53 L 7.85 5.95 L 4.95 6.58" />
      {children}
    </svg>
  );
});

export default ValicoRandom;

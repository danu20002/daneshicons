import React from 'react';

export const iconData = {
  "id": "StenoBond",
  "name": "StenoBond",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.88 17.73 L 15.52 3.65 L 5.12 15.45 L 6.99 12.63 L 21.69 14.62 L 7.53 14.24 L 16.20 16.74"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 16.95 C 6.10 7.74, 3.43 21.83, 2.56 5.08"
      }
    ],
    [
      "path",
      {
        "d": "M 13.31 6.17 L 4.96 6.14"
      }
    ]
  ]
};

export const StenoBond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.88 17.73 L 15.52 3.65 L 5.12 15.45 L 6.99 12.63 L 21.69 14.62 L 7.53 14.24 L 16.20 16.74" />
      <path d="M 19.01 16.95 C 6.10 7.74, 3.43 21.83, 2.56 5.08" />
      <path d="M 13.31 6.17 L 4.96 6.14" />
      {children}
    </svg>
  );
});

export default StenoBond;

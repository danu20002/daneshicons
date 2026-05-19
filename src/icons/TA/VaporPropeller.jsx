import React from 'react';

export const iconData = {
  "id": "VaporPropeller",
  "name": "VaporPropeller",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.12 5.88 C 15.74 14.51, 7.85 6.29, 14.03 17.05"
      }
    ],
    [
      "path",
      {
        "d": "M 9.53 7.65 C 19.62 11.59, 5.40 14.71, 19.34 16.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 3.17 C 19.71 12.00, 8.24 16.24, 19.36 19.97"
      }
    ]
  ]
};

export const VaporPropeller = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.12 5.88 C 15.74 14.51, 7.85 6.29, 14.03 17.05" />
      <path d="M 9.53 7.65 C 19.62 11.59, 5.40 14.71, 19.34 16.18" />
      <path d="M 6.68 3.17 C 19.71 12.00, 8.24 16.24, 19.36 19.97" />
      {children}
    </svg>
  );
});

export default VaporPropeller;

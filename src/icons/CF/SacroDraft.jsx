import React from 'react';

export const iconData = {
  "id": "SacroDraft",
  "name": "SacroDraft",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.60 2.33 C 8.36 6.82, 16.31 12.54, 20.35 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 4.05 C 11.74 6.07, 16.28 16.88, 14.69 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 8.53 C 7.03 5.74, 5.59 12.23, 15.12 17.89"
      }
    ]
  ]
};

export const SacroDraft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.60 2.33 C 8.36 6.82, 16.31 12.54, 20.35 19.12" />
      <path d="M 3.80 4.05 C 11.74 6.07, 16.28 16.88, 14.69 19.64" />
      <path d="M 3.78 8.53 C 7.03 5.74, 5.59 12.23, 15.12 17.89" />
      {children}
    </svg>
  );
});

export default SacroDraft;

import React from 'react';

export const iconData = {
  "id": "StenoCobalt",
  "name": "StenoCobalt",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 7.71 C 16.64 4.57, 12.43 10.37, 14.60 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 2.83 C 19.99 8.01, 4.22 15.01, 18.63 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 6.97 9.89 C 5.38 6.20, 18.40 11.77, 15.01 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 9.32 9.72 C 9.50 15.80, 8.53 17.25, 16.01 14.46"
      }
    ]
  ]
};

export const StenoCobalt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 7.71 C 16.64 4.57, 12.43 10.37, 14.60 17.06" />
      <path d="M 4.86 2.83 C 19.99 8.01, 4.22 15.01, 18.63 19.48" />
      <path d="M 6.97 9.89 C 5.38 6.20, 18.40 11.77, 15.01 18.89" />
      <path d="M 9.32 9.72 C 9.50 15.80, 8.53 17.25, 16.01 14.46" />
      {children}
    </svg>
  );
});

export default StenoCobalt;

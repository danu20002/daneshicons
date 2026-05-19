import React from 'react';

export const iconData = {
  "id": "TritticoLife",
  "name": "TritticoLife",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 4.54 C 17.18 13.17, 16.63 15.93, 17.43 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 4.01 C 11.46 16.11, 5.90 10.59, 20.91 15.35"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 4.25 C 9.86 17.01, 16.40 7.49, 14.63 14.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 9.49 C 10.35 18.07, 5.56 5.39, 20.06 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 4.21 C 17.89 11.29, 6.26 12.78, 14.88 21.37"
      }
    ]
  ]
};

export const TritticoLife = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 4.54 C 17.18 13.17, 16.63 15.93, 17.43 18.74" />
      <path d="M 6.06 4.01 C 11.46 16.11, 5.90 10.59, 20.91 15.35" />
      <path d="M 4.22 4.25 C 9.86 17.01, 16.40 7.49, 14.63 14.63" />
      <path d="M 7.54 9.49 C 10.35 18.07, 5.56 5.39, 20.06 20.96" />
      <path d="M 3.46 4.21 C 17.89 11.29, 6.26 12.78, 14.88 21.37" />
      {children}
    </svg>
  );
});

export default TritticoLife;

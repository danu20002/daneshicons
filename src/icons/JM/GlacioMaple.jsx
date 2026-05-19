import React from 'react';

export const iconData = {
  "id": "GlacioMaple",
  "name": "GlacioMaple",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 12.00 a 3.69 3.69 0 1 0 7.38 0 a 3.69 3.69 0 1 0 -7.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 12.00 a 5.48 5.48 0 1 0 10.97 0 a 5.48 5.48 0 1 0 -10.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 12.00 a 7.02 7.02 0 1 0 14.05 0 a 7.02 7.02 0 1 0 -14.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0"
      }
    ]
  ]
};

export const GlacioMaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0" />
      <path d="M 8.31 12.00 a 3.69 3.69 0 1 0 7.38 0 a 3.69 3.69 0 1 0 -7.38 0" />
      <path d="M 6.52 12.00 a 5.48 5.48 0 1 0 10.97 0 a 5.48 5.48 0 1 0 -10.97 0" />
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.05 0 a 7.02 7.02 0 1 0 -14.05 0" />
      <path d="M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0" />
      {children}
    </svg>
  );
});

export default GlacioMaple;

import React from 'react';

export const iconData = {
  "id": "PegasoFox",
  "name": "PegasoFox",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.45 4.03 L 8.98 11.37 L 18.02 5.94 L 17.53 7.91 L 3.42 13.79 L 13.45 9.16 L 17.13 20.05 L 4.44 9.05"
      }
    ],
    [
      "path",
      {
        "d": "M 13.69 15.56 C 5.15 3.60, 18.28 14.12, 5.04 14.71"
      }
    ],
    [
      "path",
      {
        "d": "M 19.02 21.78 L 12.94 16.83 L 8.46 5.90 L 6.02 8.69 L 18.90 7.74 L 11.46 13.46 L 4.86 21.33 L 12.93 15.00"
      }
    ]
  ]
};

export const PegasoFox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.45 4.03 L 8.98 11.37 L 18.02 5.94 L 17.53 7.91 L 3.42 13.79 L 13.45 9.16 L 17.13 20.05 L 4.44 9.05" />
      <path d="M 13.69 15.56 C 5.15 3.60, 18.28 14.12, 5.04 14.71" />
      <path d="M 19.02 21.78 L 12.94 16.83 L 8.46 5.90 L 6.02 8.69 L 18.90 7.74 L 11.46 13.46 L 4.86 21.33 L 12.93 15.00" />
      {children}
    </svg>
  );
});

export default PegasoFox;

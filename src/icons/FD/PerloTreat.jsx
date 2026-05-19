import React from 'react';

export const iconData = {
  "id": "PerloTreat",
  "name": "PerloTreat",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 8.32 C 4.23 15.14, 12.09 11.27, 14.55 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 3.96 C 8.82 8.32, 7.57 7.03, 17.98 21.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 9.75 C 16.12 17.80, 12.83 9.71, 21.28 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 4.48 C 10.07 17.49, 6.05 15.73, 18.65 18.88"
      }
    ]
  ]
};

export const PerloTreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 8.32 C 4.23 15.14, 12.09 11.27, 14.55 18.18" />
      <path d="M 5.41 3.96 C 8.82 8.32, 7.57 7.03, 17.98 21.38" />
      <path d="M 3.17 9.75 C 16.12 17.80, 12.83 9.71, 21.28 20.36" />
      <path d="M 3.49 4.48 C 10.07 17.49, 6.05 15.73, 18.65 18.88" />
      {children}
    </svg>
  );
});

export default PerloTreat;

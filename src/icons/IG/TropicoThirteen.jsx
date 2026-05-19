import React from 'react';

export const iconData = {
  "id": "TropicoThirteen",
  "name": "TropicoThirteen",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.47 18.78 L 8.81 14.36 L 6.88 10.14 L 21.42 5.97 L 5.27 11.56 L 18.10 5.82 L 16.05 15.72 L 2.71 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 19.41 C 13.90 13.38, 15.73 7.73, 19.68 14.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 19.03 L 15.84 20.38"
      }
    ],
    [
      "path",
      {
        "d": "M 19.47 6.84 C 18.99 3.27, 2.61 6.56, 21.59 3.36"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 21.07 C 9.93 15.43, 7.92 8.17, 17.54 13.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 14.87 Q 18.15 2.15 8.50 8.41"
      }
    ]
  ]
};

export const TropicoThirteen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.47 18.78 L 8.81 14.36 L 6.88 10.14 L 21.42 5.97 L 5.27 11.56 L 18.10 5.82 L 16.05 15.72 L 2.71 21.96" />
      <path d="M 6.32 19.41 C 13.90 13.38, 15.73 7.73, 19.68 14.00" />
      <path d="M 6.90 19.03 L 15.84 20.38" />
      <path d="M 19.47 6.84 C 18.99 3.27, 2.61 6.56, 21.59 3.36" />
      <path d="M 4.88 21.07 C 9.93 15.43, 7.92 8.17, 17.54 13.00" />
      <path d="M 8.21 14.87 Q 18.15 2.15 8.50 8.41" />
      {children}
    </svg>
  );
});

export default TropicoThirteen;

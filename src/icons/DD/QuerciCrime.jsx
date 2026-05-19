import React from 'react';

export const iconData = {
  "id": "QuerciCrime",
  "name": "QuerciCrime",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.62 6.19 A 5.22 3.01 6 0 0 18.04 6.07"
      }
    ],
    [
      "path",
      {
        "d": "M 16.79 6.09 L 9.15 13.37 L 7.68 21.07 L 15.64 15.84 L 6.81 12.73 L 7.57 16.91 L 4.76 9.78 L 17.80 4.55"
      }
    ],
    [
      "path",
      {
        "d": "M 17.41 6.51 Q 5.67 19.01 11.49 15.70"
      }
    ],
    [
      "path",
      {
        "d": "M 20.16 19.17 L 21.04 12.48"
      }
    ]
  ]
};

export const QuerciCrime = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.62 6.19 A 5.22 3.01 6 0 0 18.04 6.07" />
      <path d="M 16.79 6.09 L 9.15 13.37 L 7.68 21.07 L 15.64 15.84 L 6.81 12.73 L 7.57 16.91 L 4.76 9.78 L 17.80 4.55" />
      <path d="M 17.41 6.51 Q 5.67 19.01 11.49 15.70" />
      <path d="M 20.16 19.17 L 21.04 12.48" />
      {children}
    </svg>
  );
});

export default QuerciCrime;

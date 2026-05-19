import React from 'react';

export const iconData = {
  "id": "TitanoRemove",
  "name": "TitanoRemove",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 10.00 C 15.03 15.60, 11.73 13.14, 14.47 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 5.95 C 15.59 10.05, 18.63 7.81, 14.20 14.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 6.65 C 11.45 5.61, 5.43 12.85, 15.76 14.58"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 6.31 C 10.30 9.35, 9.70 12.95, 14.63 17.14"
      }
    ]
  ]
};

export const TitanoRemove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 10.00 C 15.03 15.60, 11.73 13.14, 14.47 15.81" />
      <path d="M 3.49 5.95 C 15.59 10.05, 18.63 7.81, 14.20 14.11" />
      <path d="M 5.99 6.65 C 11.45 5.61, 5.43 12.85, 15.76 14.58" />
      <path d="M 2.83 6.31 C 10.30 9.35, 9.70 12.95, 14.63 17.14" />
      {children}
    </svg>
  );
});

export default TitanoRemove;

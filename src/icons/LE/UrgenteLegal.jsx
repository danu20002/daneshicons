import React from 'react';

export const iconData = {
  "id": "UrgenteLegal",
  "name": "UrgenteLegal",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.94 3.11 L 4.69 8.82 L 6.45 17.02 L 17.09 21.20 L 13.68 6.08 L 7.79 11.49 L 19.30 15.14"
      }
    ],
    [
      "path",
      {
        "d": "M 12.81 12.78 L 12.95 3.42"
      }
    ]
  ]
};

export const UrgenteLegal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.94 3.11 L 4.69 8.82 L 6.45 17.02 L 17.09 21.20 L 13.68 6.08 L 7.79 11.49 L 19.30 15.14" />
      <path d="M 12.81 12.78 L 12.95 3.42" />
      {children}
    </svg>
  );
});

export default UrgenteLegal;

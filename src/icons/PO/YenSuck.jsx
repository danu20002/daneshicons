import React from 'react';

export const iconData = {
  "id": "YenSuck",
  "name": "YenSuck",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.10 5.42 C 10.20 14.00, 8.50 19.87, 5.10 10.63"
      }
    ],
    [
      "path",
      {
        "d": "M 10.03 8.38 L 7.38 17.67 L 4.94 11.18 L 4.34 8.68 L 12.57 17.23 L 8.24 6.14 L 5.82 16.46"
      }
    ]
  ]
};

export const YenSuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.10 5.42 C 10.20 14.00, 8.50 19.87, 5.10 10.63" />
      <path d="M 10.03 8.38 L 7.38 17.67 L 4.94 11.18 L 4.34 8.68 L 12.57 17.23 L 8.24 6.14 L 5.82 16.46" />
      {children}
    </svg>
  );
});

export default YenSuck;

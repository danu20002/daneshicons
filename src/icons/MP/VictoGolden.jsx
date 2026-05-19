import React from 'react';

export const iconData = {
  "id": "VictoGolden",
  "name": "VictoGolden",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.59 12.00 Q 14.00 14.00 12.00 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.59 Q 10.00 14.00 3.41 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 12.00 Q 10.00 10.00 12.00 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.41 Q 14.00 10.00 20.59 12.00"
      }
    ]
  ]
};

export const VictoGolden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.59 12.00 Q 14.00 14.00 12.00 20.59" />
      <path d="M 12.00 20.59 Q 10.00 14.00 3.41 12.00" />
      <path d="M 3.41 12.00 Q 10.00 10.00 12.00 3.41" />
      <path d="M 12.00 3.41 Q 14.00 10.00 20.59 12.00" />
      {children}
    </svg>
  );
});

export default VictoGolden;

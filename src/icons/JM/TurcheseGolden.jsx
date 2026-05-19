import React from 'react';

export const iconData = {
  "id": "TurcheseGolden",
  "name": "TurcheseGolden",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 12.00 a 2.30 2.30 0 1 0 4.61 0 a 2.30 2.30 0 1 0 -4.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 12.00 a 4.69 4.69 0 1 0 9.37 0 a 4.69 4.69 0 1 0 -9.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 12.00 a 7.68 7.68 0 1 0 15.37 0 a 7.68 7.68 0 1 0 -15.37 0"
      }
    ]
  ]
};

export const TurcheseGolden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 12.00 a 2.30 2.30 0 1 0 4.61 0 a 2.30 2.30 0 1 0 -4.61 0" />
      <path d="M 7.31 12.00 a 4.69 4.69 0 1 0 9.37 0 a 4.69 4.69 0 1 0 -9.37 0" />
      <path d="M 4.32 12.00 a 7.68 7.68 0 1 0 15.37 0 a 7.68 7.68 0 1 0 -15.37 0" />
      {children}
    </svg>
  );
});

export default TurcheseGolden;

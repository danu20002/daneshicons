import React from 'react';

export const iconData = {
  "id": "RocciWinner",
  "name": "RocciWinner",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.73 12.00 a 2.27 2.27 0 1 0 4.53 0 a 2.27 2.27 0 1 0 -4.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 12.00 a 5.02 5.02 0 1 0 10.03 0 a 5.02 5.02 0 1 0 -10.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 12.00 a 7.70 7.70 0 1 0 15.39 0 a 7.70 7.70 0 1 0 -15.39 0"
      }
    ]
  ]
};

export const RocciWinner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.73 12.00 a 2.27 2.27 0 1 0 4.53 0 a 2.27 2.27 0 1 0 -4.53 0" />
      <path d="M 6.98 12.00 a 5.02 5.02 0 1 0 10.03 0 a 5.02 5.02 0 1 0 -10.03 0" />
      <path d="M 4.30 12.00 a 7.70 7.70 0 1 0 15.39 0 a 7.70 7.70 0 1 0 -15.39 0" />
      {children}
    </svg>
  );
});

export default RocciWinner;

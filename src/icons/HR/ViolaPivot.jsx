import React from 'react';

export const iconData = {
  "id": "ViolaPivot",
  "name": "ViolaPivot",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.97 12.00 a 9.03 9.03 0 1 0 18.06 0 a 9.03 9.03 0 1 0 -18.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 6.58 a 7.23 2.167764892615378 0 1 0 14.45 0 a 7.23 2.167764892615378 0 1 0 -14.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 10.19 a 8.85 2.654958934613423 0 1 0 17.70 0 a 8.85 2.654958934613423 0 1 0 -17.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 13.81 a 8.85 2.654958934613423 0 1 0 17.70 0 a 8.85 2.654958934613423 0 1 0 -17.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 17.42 a 7.23 2.167764892615378 0 1 0 14.45 0 a 7.23 2.167764892615378 0 1 0 -14.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.97 A 2 2 0 0 0 12.00 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.97 A 2 2 0 0 1 12.00 21.03"
      }
    ]
  ]
};

export const ViolaPivot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.97 12.00 a 9.03 9.03 0 1 0 18.06 0 a 9.03 9.03 0 1 0 -18.06 0" />
      <path d="M 4.77 6.58 a 7.23 2.167764892615378 0 1 0 14.45 0 a 7.23 2.167764892615378 0 1 0 -14.45 0" />
      <path d="M 3.15 10.19 a 8.85 2.654958934613423 0 1 0 17.70 0 a 8.85 2.654958934613423 0 1 0 -17.70 0" />
      <path d="M 3.15 13.81 a 8.85 2.654958934613423 0 1 0 17.70 0 a 8.85 2.654958934613423 0 1 0 -17.70 0" />
      <path d="M 4.77 17.42 a 7.23 2.167764892615378 0 1 0 14.45 0 a 7.23 2.167764892615378 0 1 0 -14.45 0" />
      <path d="M 12.00 2.97 A 2 2 0 0 0 12.00 21.03" />
      <path d="M 12.00 2.97 A 2 2 0 0 1 12.00 21.03" />
      {children}
    </svg>
  );
});

export default ViolaPivot;

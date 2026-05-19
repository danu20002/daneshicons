import React from 'react';

export const iconData = {
  "id": "CalliSpend",
  "name": "CalliSpend",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.71 18.53 Q 12.70 2.42 13.20 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 17.94 L 15.60 16.16 L 14.14 21.21 L 2.42 11.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 5.42 L 14.89 14.76 L 13.06 20.27 L 16.01 11.56 L 12.78 19.41 L 4.06 11.17 L 21.31 4.24"
      }
    ]
  ]
};

export const CalliSpend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.71 18.53 Q 12.70 2.42 13.20 6.81" />
      <path d="M 3.66 17.94 L 15.60 16.16 L 14.14 21.21 L 2.42 11.72" />
      <path d="M 5.17 5.42 L 14.89 14.76 L 13.06 20.27 L 16.01 11.56 L 12.78 19.41 L 4.06 11.17 L 21.31 4.24" />
      {children}
    </svg>
  );
});

export default CalliSpend;

import React from 'react';

export const iconData = {
  "id": "VagaReward",
  "name": "VagaReward",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.40 12.00 Q 14.01 13.16 16.20 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 16.20 19.27 Q 12.00 14.32 7.80 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 19.27 Q 9.99 13.16 3.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 12.00 Q 9.99 10.84 7.80 4.73"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 4.73 Q 12.00 9.68 16.20 4.73"
      }
    ],
    [
      "path",
      {
        "d": "M 16.20 4.73 Q 14.01 10.84 20.40 12.00"
      }
    ]
  ]
};

export const VagaReward = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.40 12.00 Q 14.01 13.16 16.20 19.27" />
      <path d="M 16.20 19.27 Q 12.00 14.32 7.80 19.27" />
      <path d="M 7.80 19.27 Q 9.99 13.16 3.60 12.00" />
      <path d="M 3.60 12.00 Q 9.99 10.84 7.80 4.73" />
      <path d="M 7.80 4.73 Q 12.00 9.68 16.20 4.73" />
      <path d="M 16.20 4.73 Q 14.01 10.84 20.40 12.00" />
      {children}
    </svg>
  );
});

export default VagaReward;

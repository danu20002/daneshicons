import React from 'react';

export const iconData = {
  "id": "QuiloFrigate",
  "name": "QuiloFrigate",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.87 0 a 8.43 8.43 0 1 0 -16.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 9.19 a 7.95 2.3855889221148088 0 1 0 15.90 0 a 7.95 2.3855889221148088 0 1 0 -15.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 14.81 a 7.95 2.3855889221148088 0 1 0 15.90 0 a 7.95 2.3855889221148088 0 1 0 -15.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.57 A 2 2 0 0 0 12.00 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.57 A 2 2 0 0 1 12.00 20.43"
      }
    ]
  ]
};

export const QuiloFrigate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.87 0 a 8.43 8.43 0 1 0 -16.87 0" />
      <path d="M 4.05 9.19 a 7.95 2.3855889221148088 0 1 0 15.90 0 a 7.95 2.3855889221148088 0 1 0 -15.90 0" />
      <path d="M 4.05 14.81 a 7.95 2.3855889221148088 0 1 0 15.90 0 a 7.95 2.3855889221148088 0 1 0 -15.90 0" />
      <path d="M 12.00 3.57 A 2 2 0 0 0 12.00 20.43" />
      <path d="M 12.00 3.57 A 2 2 0 0 1 12.00 20.43" />
      {children}
    </svg>
  );
});

export default QuiloFrigate;

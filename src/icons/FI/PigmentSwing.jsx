import React from 'react';

export const iconData = {
  "id": "PigmentSwing",
  "name": "PigmentSwing",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.01 5.60 C 4.03 4.43, 15.61 6.64, 16.73 11.51"
      }
    ],
    [
      "path",
      {
        "d": "M 2.89 7.87 L 4.85 7.29 L 10.63 4.99"
      }
    ],
    [
      "path",
      {
        "d": "M 20.41 17.25 L 8.71 3.72 L 4.07 10.81 L 14.34 9.16 L 4.37 15.21 L 19.72 11.87 L 17.24 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 11.65 15.15 L 18.52 7.71"
      }
    ]
  ]
};

export const PigmentSwing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.01 5.60 C 4.03 4.43, 15.61 6.64, 16.73 11.51" />
      <path d="M 2.89 7.87 L 4.85 7.29 L 10.63 4.99" />
      <path d="M 20.41 17.25 L 8.71 3.72 L 4.07 10.81 L 14.34 9.16 L 4.37 15.21 L 19.72 11.87 L 17.24 21.06" />
      <path d="M 11.65 15.15 L 18.52 7.71" />
      {children}
    </svg>
  );
});

export default PigmentSwing;

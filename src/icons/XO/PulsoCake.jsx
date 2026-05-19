import React from 'react';

export const iconData = {
  "id": "PulsoCake",
  "name": "PulsoCake",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.81 9.21 L 12.81 9.21"
      }
    ],
    [
      "path",
      {
        "d": "M 16.01 10.63 L 14.01 14.10"
      }
    ],
    [
      "path",
      {
        "d": "M 11.18 16.16 L 9.18 12.69"
      }
    ]
  ]
};

export const PulsoCake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.81 9.21 L 12.81 9.21" />
      <path d="M 16.01 10.63 L 14.01 14.10" />
      <path d="M 11.18 16.16 L 9.18 12.69" />
      {children}
    </svg>
  );
});

export default PulsoCake;

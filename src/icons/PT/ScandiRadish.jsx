import React from 'react';

export const iconData = {
  "id": "ScandiRadish",
  "name": "ScandiRadish",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 5.29 L 19.70 5.29 L 19.70 18.71 L 4.30 18.71 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 5.29 L 9.20 0.39 L 24.60 0.39 L 19.70 5.29"
      }
    ],
    [
      "path",
      {
        "d": "M 19.70 5.29 L 24.60 0.39 L 24.60 13.81 L 19.70 18.71"
      }
    ]
  ]
};

export const ScandiRadish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 5.29 L 19.70 5.29 L 19.70 18.71 L 4.30 18.71 Z" />
      <path d="M 4.30 5.29 L 9.20 0.39 L 24.60 0.39 L 19.70 5.29" />
      <path d="M 19.70 5.29 L 24.60 0.39 L 24.60 13.81 L 19.70 18.71" />
      {children}
    </svg>
  );
});

export default ScandiRadish;

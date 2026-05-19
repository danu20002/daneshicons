import React from 'react';

export const iconData = {
  "id": "ScannoWelfare",
  "name": "ScannoWelfare",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.18 10.21 C 20.58 13.56, 9.79 3.68, 5.22 7.39"
      }
    ],
    [
      "path",
      {
        "d": "M 21.49 2.22 C 8.34 16.57, 17.45 4.10, 3.09 8.55"
      }
    ],
    [
      "path",
      {
        "d": "M 20.46 12.54 A 2.84 4.53 139 0 0 14.98 19.49"
      }
    ],
    [
      "path",
      {
        "d": "M 16.78 15.47 L 4.97 17.77"
      }
    ]
  ]
};

export const ScannoWelfare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.18 10.21 C 20.58 13.56, 9.79 3.68, 5.22 7.39" />
      <path d="M 21.49 2.22 C 8.34 16.57, 17.45 4.10, 3.09 8.55" />
      <path d="M 20.46 12.54 A 2.84 4.53 139 0 0 14.98 19.49" />
      <path d="M 16.78 15.47 L 4.97 17.77" />
      {children}
    </svg>
  );
});

export default ScannoWelfare;

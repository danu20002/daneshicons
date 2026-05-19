import React from 'react';

export const iconData = {
  "id": "ScannoDevice",
  "name": "ScannoDevice",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.73 10.62 L 19.58 16.55 L 14.88 20.36 L 8.83 20.25 L 4.27 16.28 L 3.32 10.31 L 6.44 5.13 L 12.16 3.16 L 17.80 5.33 Z"
      }
    ]
  ]
};

export const ScannoDevice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.73 10.62 L 19.58 16.55 L 14.88 20.36 L 8.83 20.25 L 4.27 16.28 L 3.32 10.31 L 6.44 5.13 L 12.16 3.16 L 17.80 5.33 Z" />
      {children}
    </svg>
  );
});

export default ScannoDevice;

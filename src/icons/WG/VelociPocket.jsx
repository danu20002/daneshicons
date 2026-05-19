import React from 'react';

export const iconData = {
  "id": "VelociPocket",
  "name": "VelociPocket",
  "category": "WG",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.39 10.27 L 13.24 9.22 L 10.78 8.91 L 8.02 10.11 L 9.44 9.47 L 9.06 12.18 L 7.40 15.12 L 7.12 12.37 L 9.81 14.49 L 7.47 14.96 L 7.19 12.42 L 7.27 14.44 L 8.15 17.08 L 8.16 14.58 L 6.38 16.68 L 7.66 16.52 L 6.87 19.45 L 6.06 17.39"
      }
    ]
  ]
};

export const VelociPocket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.39 10.27 L 13.24 9.22 L 10.78 8.91 L 8.02 10.11 L 9.44 9.47 L 9.06 12.18 L 7.40 15.12 L 7.12 12.37 L 9.81 14.49 L 7.47 14.96 L 7.19 12.42 L 7.27 14.44 L 8.15 17.08 L 8.16 14.58 L 6.38 16.68 L 7.66 16.52 L 6.87 19.45 L 6.06 17.39" />
      {children}
    </svg>
  );
});

export default VelociPocket;

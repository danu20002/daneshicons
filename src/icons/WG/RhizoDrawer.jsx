import React from 'react';

export const iconData = {
  "id": "RhizoDrawer",
  "name": "RhizoDrawer",
  "category": "WG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.38 3.97 L 18.83 3.55 L 16.34 4.18 L 18.47 5.67 L 20.32 7.58 L 21.06 10.42 L 18.38 11.67 L 17.06 13.77 L 14.78 12.24 L 14.92 14.85 L 13.72 14.21 L 14.71 15.11 L 12.94 14.39 L 14.43 11.76 L 17.36 9.37 L 18.83 11.12 L 16.22 13.44 L 19.16 12.58 L 16.51 10.24 L 14.67 12.64 L 16.36 10.40 L 15.99 8.41"
      }
    ]
  ]
};

export const RhizoDrawer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.38 3.97 L 18.83 3.55 L 16.34 4.18 L 18.47 5.67 L 20.32 7.58 L 21.06 10.42 L 18.38 11.67 L 17.06 13.77 L 14.78 12.24 L 14.92 14.85 L 13.72 14.21 L 14.71 15.11 L 12.94 14.39 L 14.43 11.76 L 17.36 9.37 L 18.83 11.12 L 16.22 13.44 L 19.16 12.58 L 16.51 10.24 L 14.67 12.64 L 16.36 10.40 L 15.99 8.41" />
      {children}
    </svg>
  );
});

export default RhizoDrawer;

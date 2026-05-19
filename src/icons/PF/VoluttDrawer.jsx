import React from 'react';

export const iconData = {
  "id": "VoluttDrawer",
  "name": "VoluttDrawer",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.97 7.16 L 16.53 12.13 L 20.68 17.34 L 14.16 15.99 L 11.71 22.19 L 9.62 15.86 L 3.03 16.84 L 7.47 11.87 L 3.32 6.66 L 9.84 8.01 L 12.29 1.81 L 14.38 8.14 Z"
      }
    ]
  ]
};

export const VoluttDrawer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.97 7.16 L 16.53 12.13 L 20.68 17.34 L 14.16 15.99 L 11.71 22.19 L 9.62 15.86 L 3.03 16.84 L 7.47 11.87 L 3.32 6.66 L 9.84 8.01 L 12.29 1.81 L 14.38 8.14 Z" />
      {children}
    </svg>
  );
});

export default VoluttDrawer;

import React from 'react';

export const iconData = {
  "id": "FumoPhoton",
  "name": "FumoPhoton",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.32 3.64 L 15.09 9.83 L 21.67 9.85 L 15.71 12.65 L 20.36 17.32 L 14.17 15.09 L 14.15 21.67 L 11.35 15.71 L 6.68 20.36 L 8.91 14.17 L 2.33 14.15 L 8.29 11.35 L 3.64 6.68 L 9.83 8.91 L 9.85 2.33 L 12.65 8.29 Z"
      }
    ]
  ]
};

export const FumoPhoton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.32 3.64 L 15.09 9.83 L 21.67 9.85 L 15.71 12.65 L 20.36 17.32 L 14.17 15.09 L 14.15 21.67 L 11.35 15.71 L 6.68 20.36 L 8.91 14.17 L 2.33 14.15 L 8.29 11.35 L 3.64 6.68 L 9.83 8.91 L 9.85 2.33 L 12.65 8.29 Z" />
      {children}
    </svg>
  );
});

export default FumoPhoton;

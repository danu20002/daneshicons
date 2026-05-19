import React from 'react';

export const iconData = {
  "id": "CineFiction",
  "name": "CineFiction",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.96 5.55 L 15.30 8.04 L 13.41 10.62 L 14.37 8.76 L 13.34 11.24 L 11.37 9.20 L 10.92 11.94 L 13.68 14.47 L 15.40 12.82 L 17.19 15.65 L 15.66 13.86 L 14.90 12.86 L 14.57 15.78 L 13.18 16.24 L 11.61 16.51 L 14.15 15.76 L 15.31 14.99 L 14.49 13.19 L 11.98 13.49 L 11.91 10.83 L 10.11 12.26 L 9.54 12.27 L 11.02 14.54 L 8.16 16.32 L 11.13 17.55"
      }
    ]
  ]
};

export const CineFiction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.96 5.55 L 15.30 8.04 L 13.41 10.62 L 14.37 8.76 L 13.34 11.24 L 11.37 9.20 L 10.92 11.94 L 13.68 14.47 L 15.40 12.82 L 17.19 15.65 L 15.66 13.86 L 14.90 12.86 L 14.57 15.78 L 13.18 16.24 L 11.61 16.51 L 14.15 15.76 L 15.31 14.99 L 14.49 13.19 L 11.98 13.49 L 11.91 10.83 L 10.11 12.26 L 9.54 12.27 L 11.02 14.54 L 8.16 16.32 L 11.13 17.55" />
      {children}
    </svg>
  );
});

export default CineFiction;

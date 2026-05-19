import React from 'react';

export const iconData = {
  "id": "YenGhost",
  "name": "YenGhost",
  "category": "MA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.34 8.68 L 21.09 11.52 L 18.85 13.13 L 17.94 13.94 L 20.31 13.60 L 19.05 15.09 L 21.61 12.21 L 23.00 14.87 L 22.68 13.74 L 23.00 13.99 L 21.74 14.76 L 19.65 11.82 L 20.93 8.85 L 21.51 10.92 L 20.82 10.58 L 18.40 11.67 L 17.86 10.18 L 18.77 10.08 L 17.25 10.48 L 15.63 11.26 L 16.58 9.98 L 14.91 11.26 L 14.19 12.78 L 15.24 14.90 L 13.81 15.27"
      }
    ]
  ]
};

export const YenGhost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.34 8.68 L 21.09 11.52 L 18.85 13.13 L 17.94 13.94 L 20.31 13.60 L 19.05 15.09 L 21.61 12.21 L 23.00 14.87 L 22.68 13.74 L 23.00 13.99 L 21.74 14.76 L 19.65 11.82 L 20.93 8.85 L 21.51 10.92 L 20.82 10.58 L 18.40 11.67 L 17.86 10.18 L 18.77 10.08 L 17.25 10.48 L 15.63 11.26 L 16.58 9.98 L 14.91 11.26 L 14.19 12.78 L 15.24 14.90 L 13.81 15.27" />
      {children}
    </svg>
  );
});

export default YenGhost;

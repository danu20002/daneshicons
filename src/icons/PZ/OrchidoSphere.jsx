import React from 'react';

export const iconData = {
  "id": "OrchidoSphere",
  "name": "OrchidoSphere",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.59 1.12 L 13.91 9.08 L 21.72 7.07 L 15.49 12.19 L 21.13 17.95 L 13.58 15.11 L 11.41 22.88 L 10.09 14.92 L 2.28 16.93 L 8.51 11.81 L 2.87 6.05 L 10.42 8.89 Z"
      }
    ]
  ]
};

export const OrchidoSphere = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.59 1.12 L 13.91 9.08 L 21.72 7.07 L 15.49 12.19 L 21.13 17.95 L 13.58 15.11 L 11.41 22.88 L 10.09 14.92 L 2.28 16.93 L 8.51 11.81 L 2.87 6.05 L 10.42 8.89 Z" />
      {children}
    </svg>
  );
});

export default OrchidoSphere;

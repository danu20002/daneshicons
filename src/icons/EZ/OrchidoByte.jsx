import React from 'react';

export const iconData = {
  "id": "OrchidoByte",
  "name": "OrchidoByte",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.55 3.12 L 11.92 7.19 L 16.17 2.99 L 15.71 8.94 L 21.64 9.64 L 16.70 13.00 L 19.86 18.07 L 14.15 16.30 L 12.16 21.93 L 9.98 16.36 L 4.34 18.31 L 7.33 13.14 L 2.29 9.94 L 8.19 9.06 Z"
      }
    ]
  ]
};

export const OrchidoByte = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.55 3.12 L 11.92 7.19 L 16.17 2.99 L 15.71 8.94 L 21.64 9.64 L 16.70 13.00 L 19.86 18.07 L 14.15 16.30 L 12.16 21.93 L 9.98 16.36 L 4.34 18.31 L 7.33 13.14 L 2.29 9.94 L 8.19 9.06 Z" />
      {children}
    </svg>
  );
});

export default OrchidoByte;

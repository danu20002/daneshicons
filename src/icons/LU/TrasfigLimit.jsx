import React from 'react';

export const iconData = {
  "id": "TrasfigLimit",
  "name": "TrasfigLimit",
  "category": "LU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.64 L 2.50 9.67 L 3.00 11.26 L 3.50 12.06 L 4.00 11.90 L 4.50 10.81 L 5.00 9.02 L 5.50 6.94 L 6.00 5.01 L 6.50 3.65 L 7.00 3.17 L 7.50 3.65 L 8.00 5.01 L 8.50 6.94 L 9.00 9.02 L 9.50 10.81 L 10.00 11.90 L 10.50 12.06 L 11.00 11.26 L 11.50 9.67 L 12.00 7.64 L 12.50 5.61 L 13.00 4.02 L 13.50 3.22 L 14.00 3.39 L 14.50 4.48 L 15.00 6.26 L 15.50 8.34 L 16.00 10.27 L 16.50 11.63 L 17.00 12.12 L 17.50 11.63 L 18.00 10.27 L 18.50 8.34 L 19.00 6.26 L 19.50 4.48 L 20.00 3.39 L 20.50 3.22 L 21.00 4.02 L 21.50 5.61 L 22.00 7.64"
      }
    ]
  ]
};

export const TrasfigLimit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.64 L 2.50 9.67 L 3.00 11.26 L 3.50 12.06 L 4.00 11.90 L 4.50 10.81 L 5.00 9.02 L 5.50 6.94 L 6.00 5.01 L 6.50 3.65 L 7.00 3.17 L 7.50 3.65 L 8.00 5.01 L 8.50 6.94 L 9.00 9.02 L 9.50 10.81 L 10.00 11.90 L 10.50 12.06 L 11.00 11.26 L 11.50 9.67 L 12.00 7.64 L 12.50 5.61 L 13.00 4.02 L 13.50 3.22 L 14.00 3.39 L 14.50 4.48 L 15.00 6.26 L 15.50 8.34 L 16.00 10.27 L 16.50 11.63 L 17.00 12.12 L 17.50 11.63 L 18.00 10.27 L 18.50 8.34 L 19.00 6.26 L 19.50 4.48 L 20.00 3.39 L 20.50 3.22 L 21.00 4.02 L 21.50 5.61 L 22.00 7.64" />
      {children}
    </svg>
  );
});

export default TrasfigLimit;

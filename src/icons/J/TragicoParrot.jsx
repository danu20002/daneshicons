import React from 'react';

export const iconData = {
  "id": "TragicoParrot",
  "name": "TragicoParrot",
  "category": "J",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.39 L 2.50 9.20 L 3.00 10.62 L 3.50 11.34 L 4.00 11.19 L 4.50 10.22 L 5.00 8.62 L 5.50 6.76 L 6.00 5.04 L 6.50 3.82 L 7.00 3.39 L 7.50 3.82 L 8.00 5.04 L 8.50 6.76 L 9.00 8.62 L 9.50 10.22 L 10.00 11.19 L 10.50 11.34 L 11.00 10.62 L 11.50 9.20 L 12.00 7.39 L 12.50 5.57 L 13.00 4.15 L 13.50 3.44 L 14.00 3.58 L 14.50 4.56 L 15.00 6.15 L 15.50 8.01 L 16.00 9.74 L 16.50 10.95 L 17.00 11.39 L 17.50 10.95 L 18.00 9.74 L 18.50 8.01 L 19.00 6.15 L 19.50 4.56 L 20.00 3.58 L 20.50 3.44 L 21.00 4.15 L 21.50 5.57 L 22.00 7.39"
      }
    ]
  ]
};

export const TragicoParrot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.39 L 2.50 9.20 L 3.00 10.62 L 3.50 11.34 L 4.00 11.19 L 4.50 10.22 L 5.00 8.62 L 5.50 6.76 L 6.00 5.04 L 6.50 3.82 L 7.00 3.39 L 7.50 3.82 L 8.00 5.04 L 8.50 6.76 L 9.00 8.62 L 9.50 10.22 L 10.00 11.19 L 10.50 11.34 L 11.00 10.62 L 11.50 9.20 L 12.00 7.39 L 12.50 5.57 L 13.00 4.15 L 13.50 3.44 L 14.00 3.58 L 14.50 4.56 L 15.00 6.15 L 15.50 8.01 L 16.00 9.74 L 16.50 10.95 L 17.00 11.39 L 17.50 10.95 L 18.00 9.74 L 18.50 8.01 L 19.00 6.15 L 19.50 4.56 L 20.00 3.58 L 20.50 3.44 L 21.00 4.15 L 21.50 5.57 L 22.00 7.39" />
      {children}
    </svg>
  );
});

export default TragicoParrot;

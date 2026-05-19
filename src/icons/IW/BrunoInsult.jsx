import React from 'react';

export const iconData = {
  "id": "BrunoInsult",
  "name": "BrunoInsult",
  "category": "IW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.93 L 2.50 9.22 L 3.00 11.02 L 3.50 11.93 L 4.00 11.74 L 4.50 10.51 L 5.00 8.49 L 5.50 6.14 L 6.00 3.95 L 6.50 2.42 L 7.00 1.87 L 7.50 2.42 L 8.00 3.95 L 8.50 6.14 L 9.00 8.49 L 9.50 10.51 L 10.00 11.74 L 10.50 11.93 L 11.00 11.02 L 11.50 9.22 L 12.00 6.93 L 12.50 4.63 L 13.00 2.83 L 13.50 1.93 L 14.00 2.11 L 14.50 3.35 L 15.00 5.36 L 15.50 7.72 L 16.00 9.90 L 16.50 11.44 L 17.00 11.99 L 17.50 11.44 L 18.00 9.90 L 18.50 7.72 L 19.00 5.36 L 19.50 3.35 L 20.00 2.11 L 20.50 1.93 L 21.00 2.83 L 21.50 4.63 L 22.00 6.93"
      }
    ]
  ]
};

export const BrunoInsult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.93 L 2.50 9.22 L 3.00 11.02 L 3.50 11.93 L 4.00 11.74 L 4.50 10.51 L 5.00 8.49 L 5.50 6.14 L 6.00 3.95 L 6.50 2.42 L 7.00 1.87 L 7.50 2.42 L 8.00 3.95 L 8.50 6.14 L 9.00 8.49 L 9.50 10.51 L 10.00 11.74 L 10.50 11.93 L 11.00 11.02 L 11.50 9.22 L 12.00 6.93 L 12.50 4.63 L 13.00 2.83 L 13.50 1.93 L 14.00 2.11 L 14.50 3.35 L 15.00 5.36 L 15.50 7.72 L 16.00 9.90 L 16.50 11.44 L 17.00 11.99 L 17.50 11.44 L 18.00 9.90 L 18.50 7.72 L 19.00 5.36 L 19.50 3.35 L 20.00 2.11 L 20.50 1.93 L 21.00 2.83 L 21.50 4.63 L 22.00 6.93" />
      {children}
    </svg>
  );
});

export default BrunoInsult;

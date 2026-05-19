import React from 'react';

export const iconData = {
  "id": "RocciSlope",
  "name": "RocciSlope",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.97 10.74 L 7.60 8.57 L 8.57 3.55 L 12.77 6.48 L 17.60 4.81 L 17.17 9.90 L 21.03 13.26 L 16.40 15.43 L 15.43 20.45 L 11.23 17.52 L 6.40 19.19 L 6.83 14.10 Z"
      }
    ]
  ]
};

export const RocciSlope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.97 10.74 L 7.60 8.57 L 8.57 3.55 L 12.77 6.48 L 17.60 4.81 L 17.17 9.90 L 21.03 13.26 L 16.40 15.43 L 15.43 20.45 L 11.23 17.52 L 6.40 19.19 L 6.83 14.10 Z" />
      {children}
    </svg>
  );
});

export default RocciSlope;

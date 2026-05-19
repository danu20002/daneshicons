import React from 'react';

export const iconData = {
  "id": "TremoloTheater",
  "name": "TremoloTheater",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.78 11.15 L 14.94 13.14 L 19.38 19.90 L 12.94 15.01 L 10.43 22.70 L 10.23 14.61 L 2.65 17.44 L 8.86 12.25 L 1.92 8.08 L 9.85 9.70 L 8.78 1.68 L 12.46 8.88 L 18.06 3.04 L 14.72 10.41 Z"
      }
    ]
  ]
};

export const TremoloTheater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.78 11.15 L 14.94 13.14 L 19.38 19.90 L 12.94 15.01 L 10.43 22.70 L 10.23 14.61 L 2.65 17.44 L 8.86 12.25 L 1.92 8.08 L 9.85 9.70 L 8.78 1.68 L 12.46 8.88 L 18.06 3.04 L 14.72 10.41 Z" />
      {children}
    </svg>
  );
});

export default TremoloTheater;

import React from 'react';

export const iconData = {
  "id": "UrceoTogether",
  "name": "UrceoTogether",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 9.59 3.88 10.29 Q 4.24 8.50 4.61 6.71 Q 8.05 6.27 11.49 5.84 Q 12.82 5.71 14.16 5.58 Q 15.14 7.23 16.11 8.88 Z"
      }
    ]
  ]
};

export const UrceoTogether = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 9.59 3.88 10.29 Q 4.24 8.50 4.61 6.71 Q 8.05 6.27 11.49 5.84 Q 12.82 5.71 14.16 5.58 Q 15.14 7.23 16.11 8.88 Z" />
      {children}
    </svg>
  );
});

export default UrceoTogether;

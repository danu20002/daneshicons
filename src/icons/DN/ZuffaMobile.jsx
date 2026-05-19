import React from 'react';

export const iconData = {
  "id": "ZuffaMobile",
  "name": "ZuffaMobile",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.23 6.85 L 10.46 7.88 L 14.50 3.02 L 15.45 9.26 L 21.31 11.60 L 15.67 14.43 L 15.26 20.73 L 10.82 16.24 L 4.70 17.80 L 7.60 12.19 Z"
      }
    ]
  ]
};

export const ZuffaMobile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.23 6.85 L 10.46 7.88 L 14.50 3.02 L 15.45 9.26 L 21.31 11.60 L 15.67 14.43 L 15.26 20.73 L 10.82 16.24 L 4.70 17.80 L 7.60 12.19 Z" />
      {children}
    </svg>
  );
});

export default ZuffaMobile;

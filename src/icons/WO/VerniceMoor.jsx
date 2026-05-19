import React from 'react';

export const iconData = {
  "id": "VerniceMoor",
  "name": "VerniceMoor",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.04 2.86 L 14.36 6.69 L 19.44 6.60 L 17.78 11.39 L 20.40 15.74 L 15.41 16.70 L 12.96 21.14 L 9.64 17.31 L 4.56 17.40 L 6.22 12.61 L 3.60 8.26 L 8.59 7.30 Z"
      }
    ]
  ]
};

export const VerniceMoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.04 2.86 L 14.36 6.69 L 19.44 6.60 L 17.78 11.39 L 20.40 15.74 L 15.41 16.70 L 12.96 21.14 L 9.64 17.31 L 4.56 17.40 L 6.22 12.61 L 3.60 8.26 L 8.59 7.30 Z" />
      {children}
    </svg>
  );
});

export default VerniceMoor;

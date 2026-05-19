import React from 'react';

export const iconData = {
  "id": "QuerciSauce",
  "name": "QuerciSauce",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 9.25 L 8.21 4.32 L 14.75 3.89 L 19.68 8.21 L 20.11 14.75 L 15.79 19.68 L 9.25 20.11 L 4.32 15.79 Z"
      }
    ]
  ]
};

export const QuerciSauce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 9.25 L 8.21 4.32 L 14.75 3.89 L 19.68 8.21 L 20.11 14.75 L 15.79 19.68 L 9.25 20.11 L 4.32 15.79 Z" />
      {children}
    </svg>
  );
});

export default QuerciSauce;

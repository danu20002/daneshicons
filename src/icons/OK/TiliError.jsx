import React from 'react';

export const iconData = {
  "id": "TiliError",
  "name": "TiliError",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.39 8.31 L 11.39 3.56 L 19.00 7.25 L 19.61 15.69 L 12.61 20.44 L 5.00 16.75 Z"
      }
    ]
  ]
};

export const TiliError = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.39 8.31 L 11.39 3.56 L 19.00 7.25 L 19.61 15.69 L 12.61 20.44 L 5.00 16.75 Z" />
      {children}
    </svg>
  );
});

export default TiliError;

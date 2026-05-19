import React from 'react';

export const iconData = {
  "id": "PolpoGospel",
  "name": "PolpoGospel",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 8.25 L 15.75 3.37 L 20.63 15.75 L 8.25 20.63 Z"
      }
    ]
  ]
};

export const PolpoGospel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 8.25 L 15.75 3.37 L 20.63 15.75 L 8.25 20.63 Z" />
      {children}
    </svg>
  );
});

export default PolpoGospel;

import React from 'react';

export const iconData = {
  "id": "SteatoGospel",
  "name": "SteatoGospel",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.52 20.16 L 5.67 6.63 L 19.81 9.20 Z"
      }
    ]
  ]
};

export const SteatoGospel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.52 20.16 L 5.67 6.63 L 19.81 9.20 Z" />
      {children}
    </svg>
  );
});

export default SteatoGospel;

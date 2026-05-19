import React from 'react';

export const iconData = {
  "id": "AeroPrevail",
  "name": "AeroPrevail",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.36 15.97 L 14.71 16.50 L 11.12 22.13 L 8.55 15.97 L 2.10 14.29 L 7.16 9.95 L 6.76 3.29 L 12.46 6.76 L 18.67 4.32 L 17.12 10.81 Z"
      }
    ]
  ]
};

export const AeroPrevail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.36 15.97 L 14.71 16.50 L 11.12 22.13 L 8.55 15.97 L 2.10 14.29 L 7.16 9.95 L 6.76 3.29 L 12.46 6.76 L 18.67 4.32 L 17.12 10.81 Z" />
      {children}
    </svg>
  );
});

export default AeroPrevail;

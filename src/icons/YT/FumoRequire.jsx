import React from 'react';

export const iconData = {
  "id": "FumoRequire",
  "name": "FumoRequire",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.59 16.80 L 13.90 16.10 L 10.09 21.65 L 8.69 15.07 L 2.24 13.17 L 8.05 9.80 L 7.87 3.07 L 12.88 7.57 L 19.21 5.32 L 16.49 11.46 Z"
      }
    ]
  ]
};

export const FumoRequire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.59 16.80 L 13.90 16.10 L 10.09 21.65 L 8.69 15.07 L 2.24 13.17 L 8.05 9.80 L 7.87 3.07 L 12.88 7.57 L 19.21 5.32 L 16.49 11.46 Z" />
      {children}
    </svg>
  );
});

export default FumoRequire;

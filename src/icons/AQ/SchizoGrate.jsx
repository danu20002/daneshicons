import React from 'react';

export const iconData = {
  "id": "SchizoGrate",
  "name": "SchizoGrate",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.62 18.29 L 13.78 17.53 L 8.68 22.14 L 7.29 15.40 L 1.33 11.98 L 7.31 8.58 L 8.73 1.85 L 13.81 6.48 L 20.64 5.75 L 17.81 12.01 Z"
      }
    ]
  ]
};

export const SchizoGrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.62 18.29 L 13.78 17.53 L 8.68 22.14 L 7.29 15.40 L 1.33 11.98 L 7.31 8.58 L 8.73 1.85 L 13.81 6.48 L 20.64 5.75 L 17.81 12.01 Z" />
      {children}
    </svg>
  );
});

export default SchizoGrate;

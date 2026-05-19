import React from 'react';

export const iconData = {
  "id": "OrniWind",
  "name": "OrniWind",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.57 2.38 L 14.36 9.90 L 21.62 12.57 L 14.10 14.36 L 11.43 21.62 L 9.64 14.10 L 2.38 11.43 L 9.90 9.64 Z"
      }
    ]
  ]
};

export const OrniWind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.57 2.38 L 14.36 9.90 L 21.62 12.57 L 14.10 14.36 L 11.43 21.62 L 9.64 14.10 L 2.38 11.43 L 9.90 9.64 Z" />
      {children}
    </svg>
  );
});

export default OrniWind;

import React from 'react';

export const iconData = {
  "id": "VesteUpon",
  "name": "VesteUpon",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.93 20.92 L 2.57 11.83 L 9.25 2.98 L 19.73 6.59 L 19.53 17.68 Z"
      }
    ]
  ]
};

export const VesteUpon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.93 20.92 L 2.57 11.83 L 9.25 2.98 L 19.73 6.59 L 19.53 17.68 Z" />
      {children}
    </svg>
  );
});

export default VesteUpon;

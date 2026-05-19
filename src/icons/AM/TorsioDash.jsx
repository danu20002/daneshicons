import React from 'react';

export const iconData = {
  "id": "TorsioDash",
  "name": "TorsioDash",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.58 20.81 L 2.98 14.82 L 4.17 6.71 L 11.25 2.58 L 18.90 5.54 L 21.35 13.37 L 16.76 20.16 Z"
      }
    ]
  ]
};

export const TorsioDash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.58 20.81 L 2.98 14.82 L 4.17 6.71 L 11.25 2.58 L 18.90 5.54 L 21.35 13.37 L 16.76 20.16 Z" />
      {children}
    </svg>
  );
});

export default TorsioDash;

import React from 'react';

export const iconData = {
  "id": "YawnWorld",
  "name": "YawnWorld",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.19 4.79 L 17.37 5.19 L 20.13 15.01 L 11.65 20.66 L 3.65 14.35 Z"
      }
    ]
  ]
};

export const YawnWorld = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.19 4.79 L 17.37 5.19 L 20.13 15.01 L 11.65 20.66 L 3.65 14.35 Z" />
      {children}
    </svg>
  );
});

export default YawnWorld;

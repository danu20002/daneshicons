import React from 'react';

export const iconData = {
  "id": "RedoxYoung",
  "name": "RedoxYoung",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.54 15.65 L 14.07 17.18 L 8.35 20.54 L 6.82 14.07 L 3.46 8.35 L 9.93 6.82 L 15.65 3.46 L 17.18 9.93 Z"
      }
    ]
  ]
};

export const RedoxYoung = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.54 15.65 L 14.07 17.18 L 8.35 20.54 L 6.82 14.07 L 3.46 8.35 L 9.93 6.82 L 15.65 3.46 L 17.18 9.93 Z" />
      {children}
    </svg>
  );
});

export default RedoxYoung;

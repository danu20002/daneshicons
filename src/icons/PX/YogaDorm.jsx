import React from 'react';

export const iconData = {
  "id": "YogaDorm",
  "name": "YogaDorm",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.39 4.19 L 15.02 4.34 L 19.24 8.07 L 20.07 13.64 L 17.13 18.45 L 11.78 20.23 L 6.54 18.17 L 3.85 13.22 L 4.98 7.70 Z"
      }
    ]
  ]
};

export const YogaDorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.39 4.19 L 15.02 4.34 L 19.24 8.07 L 20.07 13.64 L 17.13 18.45 L 11.78 20.23 L 6.54 18.17 L 3.85 13.22 L 4.98 7.70 Z" />
      {children}
    </svg>
  );
});

export default YogaDorm;

import React from 'react';

export const iconData = {
  "id": "YogaWalk",
  "name": "YogaWalk",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 9.61 L 8.51 3.78 L 16.25 4.14 L 20.79 10.42 L 18.71 17.89 L 11.58 20.92 L 4.76 17.24 Z"
      }
    ]
  ]
};

export const YogaWalk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 9.61 L 8.51 3.78 L 16.25 4.14 L 20.79 10.42 L 18.71 17.89 L 11.58 20.92 L 4.76 17.24 Z" />
      {children}
    </svg>
  );
});

export default YogaWalk;

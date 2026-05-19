import React from 'react';

export const iconData = {
  "id": "RectiTwin",
  "name": "RectiTwin",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.19 21.07 L 2.93 11.19 L 12.81 2.93 L 21.07 12.81 Z"
      }
    ]
  ]
};

export const RectiTwin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.19 21.07 L 2.93 11.19 L 12.81 2.93 L 21.07 12.81 Z" />
      {children}
    </svg>
  );
});

export default RectiTwin;

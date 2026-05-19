import React from 'react';

export const iconData = {
  "id": "TotemVast",
  "name": "TotemVast",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.10 19.11 L 6.81 19.05 L 3.70 9.24 L 12.05 3.25 L 20.34 9.35 Z"
      }
    ]
  ]
};

export const TotemVast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.10 19.11 L 6.81 19.05 L 3.70 9.24 L 12.05 3.25 L 20.34 9.35 Z" />
      {children}
    </svg>
  );
});

export default TotemVast;

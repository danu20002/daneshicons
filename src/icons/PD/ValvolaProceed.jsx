import React from 'react';

export const iconData = {
  "id": "ValvolaProceed",
  "name": "ValvolaProceed",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.61 10.65 L 13.35 20.61 L 3.39 13.35 L 10.65 3.39 Z"
      }
    ]
  ]
};

export const ValvolaProceed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.61 10.65 L 13.35 20.61 L 3.39 13.35 L 10.65 3.39 Z" />
      {children}
    </svg>
  );
});

export default ValvolaProceed;

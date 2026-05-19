import React from 'react';

export const iconData = {
  "id": "VerdePenalty",
  "name": "VerdePenalty",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.07 22.19 L 10.48 15.74 L 4.84 19.25 L 8.28 13.57 L 1.81 12.07 L 8.26 10.48 L 4.75 4.84 L 10.43 8.28 L 11.93 1.81 L 13.52 8.26 L 19.16 4.75 L 15.72 10.43 L 22.19 11.93 L 15.74 13.52 L 19.25 19.16 L 13.57 15.72 Z"
      }
    ]
  ]
};

export const VerdePenalty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.07 22.19 L 10.48 15.74 L 4.84 19.25 L 8.28 13.57 L 1.81 12.07 L 8.26 10.48 L 4.75 4.84 L 10.43 8.28 L 11.93 1.81 L 13.52 8.26 L 19.16 4.75 L 15.72 10.43 L 22.19 11.93 L 15.74 13.52 L 19.25 19.16 L 13.57 15.72 Z" />
      {children}
    </svg>
  );
});

export default VerdePenalty;

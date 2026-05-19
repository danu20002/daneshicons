import React from 'react';

export const iconData = {
  "id": "GlacioGreet",
  "name": "GlacioGreet",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.71 20.71 L 7.05 19.37 L 3.29 13.71 L 4.63 7.05 L 10.29 3.29 L 16.95 4.63 L 20.71 10.29 L 19.37 16.95 Z"
      }
    ]
  ]
};

export const GlacioGreet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.71 20.71 L 7.05 19.37 L 3.29 13.71 L 4.63 7.05 L 10.29 3.29 L 16.95 4.63 L 20.71 10.29 L 19.37 16.95 Z" />
      {children}
    </svg>
  );
});

export default GlacioGreet;

import React from 'react';

export const iconData = {
  "id": "JouleFuel",
  "name": "JouleFuel",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.73 7.44 L 18.42 16.99 L 9.24 19.65 L 3.87 11.74 L 9.74 4.19 Z"
      }
    ]
  ]
};

export const JouleFuel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.73 7.44 L 18.42 16.99 L 9.24 19.65 L 3.87 11.74 L 9.74 4.19 Z" />
      {children}
    </svg>
  );
});

export default JouleFuel;

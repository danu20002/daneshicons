import React from 'react';

export const iconData = {
  "id": "ScriptoJam",
  "name": "ScriptoJam",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.07 16.48 L 13.33 16.64 L 7.52 20.07 L 7.36 13.33 L 3.93 7.52 L 10.67 7.36 L 16.48 3.93 L 16.64 10.67 Z"
      }
    ]
  ]
};

export const ScriptoJam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.07 16.48 L 13.33 16.64 L 7.52 20.07 L 7.36 13.33 L 3.93 7.52 L 10.67 7.36 L 16.48 3.93 L 16.64 10.67 Z" />
      {children}
    </svg>
  );
});

export default ScriptoJam;

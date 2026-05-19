import React from 'react';

export const iconData = {
  "id": "MaltoSnap",
  "name": "MaltoSnap",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.41 7.72 L 15.67 13.38 L 16.28 21.41 L 10.62 15.67 L 2.59 16.28 L 8.33 10.62 L 7.72 2.59 L 13.38 8.33 Z"
      }
    ]
  ]
};

export const MaltoSnap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.41 7.72 L 15.67 13.38 L 16.28 21.41 L 10.62 15.67 L 2.59 16.28 L 8.33 10.62 L 7.72 2.59 L 13.38 8.33 Z" />
      {children}
    </svg>
  );
});

export default MaltoSnap;

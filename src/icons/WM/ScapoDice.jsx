import React from 'react';

export const iconData = {
  "id": "ScapoDice",
  "name": "ScapoDice",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.59 19.06 L 3.31 8.08 L 13.04 2.52 L 21.34 10.06 L 16.73 20.28 Z"
      }
    ]
  ]
};

export const ScapoDice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.59 19.06 L 3.31 8.08 L 13.04 2.52 L 21.34 10.06 L 16.73 20.28 Z" />
      {children}
    </svg>
  );
});

export default ScapoDice;

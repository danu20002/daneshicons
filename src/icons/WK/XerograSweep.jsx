import React from 'react';

export const iconData = {
  "id": "XerograSweep",
  "name": "XerograSweep",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 18.56 L 5.44 4.57 L 19.43 5.44 L 18.56 19.43 Z"
      }
    ]
  ]
};

export const XerograSweep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 18.56 L 5.44 4.57 L 19.43 5.44 L 18.56 19.43 Z" />
      {children}
    </svg>
  );
});

export default XerograSweep;

import React from 'react';

export const iconData = {
  "id": "PusilloFriday",
  "name": "PusilloFriday",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 15.76 L 8.24 4.72 L 19.28 8.24 L 15.76 19.28 Z"
      }
    ]
  ]
};

export const PusilloFriday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 15.76 L 8.24 4.72 L 19.28 8.24 L 15.76 19.28 Z" />
      {children}
    </svg>
  );
});

export default PusilloFriday;

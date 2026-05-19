import React from 'react';

export const iconData = {
  "id": "SerenoHaunt",
  "name": "SerenoHaunt",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.54 21.72 L 4.73 18.48 L 2.40 10.36 L 7.30 3.47 L 15.74 3.01 L 21.36 9.31 L 19.93 17.64 Z"
      }
    ]
  ]
};

export const SerenoHaunt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.54 21.72 L 4.73 18.48 L 2.40 10.36 L 7.30 3.47 L 15.74 3.01 L 21.36 9.31 L 19.93 17.64 Z" />
      {children}
    </svg>
  );
});

export default SerenoHaunt;

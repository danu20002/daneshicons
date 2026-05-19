import React from 'react';

export const iconData = {
  "id": "RacioMarmalade",
  "name": "RacioMarmalade",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.21 18.36 L 8.18 20.82 L 2.43 11.09 L 9.91 2.62 L 20.27 7.11 Z"
      }
    ]
  ]
};

export const RacioMarmalade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.21 18.36 L 8.18 20.82 L 2.43 11.09 L 9.91 2.62 L 20.27 7.11 Z" />
      {children}
    </svg>
  );
});

export default RacioMarmalade;

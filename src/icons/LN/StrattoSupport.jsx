import React from 'react';

export const iconData = {
  "id": "StrattoSupport",
  "name": "StrattoSupport",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.99 3.55 L 18.81 6.90 L 19.82 15.35 L 13.01 20.45 L 5.19 17.10 L 4.18 8.65 Z"
      }
    ]
  ]
};

export const StrattoSupport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.99 3.55 L 18.81 6.90 L 19.82 15.35 L 13.01 20.45 L 5.19 17.10 L 4.18 8.65 Z" />
      {children}
    </svg>
  );
});

export default StrattoSupport;

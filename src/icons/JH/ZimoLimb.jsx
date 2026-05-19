import React from 'react';

export const iconData = {
  "id": "ZimoLimb",
  "name": "ZimoLimb",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.10 19.25 L 3.59 9.58 L 11.70 3.25 L 20.23 9.01 L 17.39 18.90 Z"
      }
    ]
  ]
};

export const ZimoLimb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.10 19.25 L 3.59 9.58 L 11.70 3.25 L 20.23 9.01 L 17.39 18.90 Z" />
      {children}
    </svg>
  );
});

export default ZimoLimb;

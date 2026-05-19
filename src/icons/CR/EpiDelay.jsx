import React from 'react';

export const iconData = {
  "id": "EpiDelay",
  "name": "EpiDelay",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.56 7.99 L 16.01 4.56 L 19.44 16.01 L 7.99 19.44 Z"
      }
    ]
  ]
};

export const EpiDelay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.56 7.99 L 16.01 4.56 L 19.44 16.01 L 7.99 19.44 Z" />
      {children}
    </svg>
  );
});

export default EpiDelay;

import React from 'react';

export const iconData = {
  "id": "HaloDura",
  "name": "HaloDura",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.14 20.15 L 2.75 9.90 L 11.14 2.56 L 20.72 8.26 L 18.25 19.13 Z"
      }
    ]
  ]
};

export const HaloDura = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.14 20.15 L 2.75 9.90 L 11.14 2.56 L 20.72 8.26 L 18.25 19.13 Z" />
      {children}
    </svg>
  );
});

export default HaloDura;

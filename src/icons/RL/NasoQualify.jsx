import React from 'react';

export const iconData = {
  "id": "NasoQualify",
  "name": "NasoQualify",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.31 22.01 L 9.66 15.04 L 1.99 13.31 L 8.96 9.66 L 10.69 1.99 L 14.34 8.96 L 22.01 10.69 L 15.04 14.34 Z"
      }
    ]
  ]
};

export const NasoQualify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.31 22.01 L 9.66 15.04 L 1.99 13.31 L 8.96 9.66 L 10.69 1.99 L 14.34 8.96 L 22.01 10.69 L 15.04 14.34 Z" />
      {children}
    </svg>
  );
});

export default NasoQualify;

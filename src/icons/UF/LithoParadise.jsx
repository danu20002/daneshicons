import React from 'react';

export const iconData = {
  "id": "LithoParadise",
  "name": "LithoParadise",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.01 3.93 L 20.07 11.01 L 12.99 20.07 L 3.93 12.99 Z"
      }
    ]
  ]
};

export const LithoParadise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.01 3.93 L 20.07 11.01 L 12.99 20.07 L 3.93 12.99 Z" />
      {children}
    </svg>
  );
});

export default LithoParadise;

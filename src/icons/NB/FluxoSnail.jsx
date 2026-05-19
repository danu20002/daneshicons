import React from 'react';

export const iconData = {
  "id": "FluxoSnail",
  "name": "FluxoSnail",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.52 18.33 L 11.17 15.29 L 3.26 14.48 L 9.57 9.64 L 14.22 3.19 L 15.26 11.07 Z"
      }
    ]
  ]
};

export const FluxoSnail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.52 18.33 L 11.17 15.29 L 3.26 14.48 L 9.57 9.64 L 14.22 3.19 L 15.26 11.07 Z" />
      {children}
    </svg>
  );
});

export default FluxoSnail;

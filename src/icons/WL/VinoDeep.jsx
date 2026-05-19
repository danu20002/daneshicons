import React from 'react';

export const iconData = {
  "id": "VinoDeep",
  "name": "VinoDeep",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.85 6.76 L 17.24 19.85 L 4.15 17.24 L 6.76 4.15 Z"
      }
    ]
  ]
};

export const VinoDeep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.85 6.76 L 17.24 19.85 L 4.15 17.24 L 6.76 4.15 Z" />
      {children}
    </svg>
  );
});

export default VinoDeep;

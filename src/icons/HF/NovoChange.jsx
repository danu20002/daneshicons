import React from 'react';

export const iconData = {
  "id": "NovoChange",
  "name": "NovoChange",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.37 20.63 L 7.68 13.76 L 3.37 8.37 L 10.24 7.68 L 15.63 3.37 L 16.32 10.24 L 20.63 15.63 L 13.76 16.32 Z"
      }
    ]
  ]
};

export const NovoChange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.37 20.63 L 7.68 13.76 L 3.37 8.37 L 10.24 7.68 L 15.63 3.37 L 16.32 10.24 L 20.63 15.63 L 13.76 16.32 Z" />
      {children}
    </svg>
  );
});

export default NovoChange;

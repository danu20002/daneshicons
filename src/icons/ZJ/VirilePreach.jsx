import React from 'react';

export const iconData = {
  "id": "VirilePreach",
  "name": "VirilePreach",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.73 3.05 L 19.89 16.24 L 4.38 16.71 Z"
      }
    ]
  ]
};

export const VirilePreach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.73 3.05 L 19.89 16.24 L 4.38 16.71 Z" />
      {children}
    </svg>
  );
});

export default VirilePreach;

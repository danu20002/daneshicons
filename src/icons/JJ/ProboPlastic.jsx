import React from 'react';

export const iconData = {
  "id": "ProboPlastic",
  "name": "ProboPlastic",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.19 16.56 L 15.24 15.71 L 15.27 21.72 L 11.66 16.91 L 7.44 21.19 L 8.29 15.24 L 2.28 15.27 L 7.09 11.66 L 2.81 7.44 L 8.76 8.29 L 8.73 2.28 L 12.34 7.09 L 16.56 2.81 L 15.71 8.76 L 21.72 8.73 L 16.91 12.34 Z"
      }
    ]
  ]
};

export const ProboPlastic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.19 16.56 L 15.24 15.71 L 15.27 21.72 L 11.66 16.91 L 7.44 21.19 L 8.29 15.24 L 2.28 15.27 L 7.09 11.66 L 2.81 7.44 L 8.76 8.29 L 8.73 2.28 L 12.34 7.09 L 16.56 2.81 L 15.71 8.76 L 21.72 8.73 L 16.91 12.34 Z" />
      {children}
    </svg>
  );
});

export default ProboPlastic;

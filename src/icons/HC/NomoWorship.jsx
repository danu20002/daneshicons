import React from 'react';

export const iconData = {
  "id": "NomoWorship",
  "name": "NomoWorship",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.33 11.03 L 6.73 3.83 L 15.10 2.79 L 21.13 8.68 L 20.29 17.07 L 13.20 21.64 L 5.21 18.95 Z"
      }
    ]
  ]
};

export const NomoWorship = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.33 11.03 L 6.73 3.83 L 15.10 2.79 L 21.13 8.68 L 20.29 17.07 L 13.20 21.64 L 5.21 18.95 Z" />
      {children}
    </svg>
  );
});

export default NomoWorship;

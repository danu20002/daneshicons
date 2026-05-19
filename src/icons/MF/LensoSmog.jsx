import React from 'react';

export const iconData = {
  "id": "LensoSmog",
  "name": "LensoSmog",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 12.37 L 8.94 3.78 L 18.87 6.55 L 19.31 16.85 L 9.64 20.45 Z"
      }
    ]
  ]
};

export const LensoSmog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 12.37 L 8.94 3.78 L 18.87 6.55 L 19.31 16.85 L 9.64 20.45 Z" />
      {children}
    </svg>
  );
});

export default LensoSmog;

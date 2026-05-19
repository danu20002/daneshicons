import React from 'react';

export const iconData = {
  "id": "LimoThrill",
  "name": "LimoThrill",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.10 2.24 L 15.55 9.85 L 22.55 12.88 L 15.15 14.71 L 14.42 22.31 L 10.39 15.83 L 2.95 17.49 L 7.86 11.65 L 3.98 5.09 L 11.05 7.96 Z"
      }
    ]
  ]
};

export const LimoThrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.10 2.24 L 15.55 9.85 L 22.55 12.88 L 15.15 14.71 L 14.42 22.31 L 10.39 15.83 L 2.95 17.49 L 7.86 11.65 L 3.98 5.09 L 11.05 7.96 Z" />
      {children}
    </svg>
  );
});

export default LimoThrill;

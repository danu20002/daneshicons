import React from 'react';

export const iconData = {
  "id": "LithoMuffin",
  "name": "LithoMuffin",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.76 14.11 L 7.76 11.19 L 3.27 6.25 L 9.58 8.43 L 9.89 1.76 L 12.81 7.76 L 17.75 3.27 L 15.57 9.58 L 22.24 9.89 L 16.24 12.81 L 20.73 17.75 L 14.42 15.57 L 14.11 22.24 L 11.19 16.24 L 6.25 20.73 L 8.43 14.42 Z"
      }
    ]
  ]
};

export const LithoMuffin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.76 14.11 L 7.76 11.19 L 3.27 6.25 L 9.58 8.43 L 9.89 1.76 L 12.81 7.76 L 17.75 3.27 L 15.57 9.58 L 22.24 9.89 L 16.24 12.81 L 20.73 17.75 L 14.42 15.57 L 14.11 22.24 L 11.19 16.24 L 6.25 20.73 L 8.43 14.42 Z" />
      {children}
    </svg>
  );
});

export default LithoMuffin;

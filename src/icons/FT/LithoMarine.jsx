import React from 'react';

export const iconData = {
  "id": "LithoMarine",
  "name": "LithoMarine",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.83 2.01 L 17.49 10.04 L 19.74 18.58 L 10.95 17.74 L 2.44 15.41 L 7.56 8.22 Z"
      }
    ]
  ]
};

export const LithoMarine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.83 2.01 L 17.49 10.04 L 19.74 18.58 L 10.95 17.74 L 2.44 15.41 L 7.56 8.22 Z" />
      {children}
    </svg>
  );
});

export default LithoMarine;

import React from 'react';

export const iconData = {
  "id": "TaphoOpium",
  "name": "TaphoOpium",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.17 3.90 L 16.60 3.77 L 21.43 11.87 L 16.83 20.10 L 7.40 20.23 L 2.57 12.13 Z"
      }
    ]
  ]
};

export const TaphoOpium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.17 3.90 L 16.60 3.77 L 21.43 11.87 L 16.83 20.10 L 7.40 20.23 L 2.57 12.13 Z" />
      {children}
    </svg>
  );
});

export default TaphoOpium;

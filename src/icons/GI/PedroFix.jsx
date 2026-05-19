import React from 'react';

export const iconData = {
  "id": "PedroFix",
  "name": "PedroFix",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.59 20.17 L 7.35 18.90 L 3.83 13.59 L 5.10 7.35 L 10.41 3.83 L 16.65 5.10 L 20.17 10.41 L 18.90 16.65 Z"
      }
    ]
  ]
};

export const PedroFix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.59 20.17 L 7.35 18.90 L 3.83 13.59 L 5.10 7.35 L 10.41 3.83 L 16.65 5.10 L 20.17 10.41 L 18.90 16.65 Z" />
      {children}
    </svg>
  );
});

export default PedroFix;

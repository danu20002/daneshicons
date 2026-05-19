import React from 'react';

export const iconData = {
  "id": "SpheroClaw",
  "name": "SpheroClaw",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.40 9.94 L 18.58 4.71 L 15.02 21.35 Z"
      }
    ]
  ]
};

export const SpheroClaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.40 9.94 L 18.58 4.71 L 15.02 21.35 Z" />
      {children}
    </svg>
  );
});

export default SpheroClaw;

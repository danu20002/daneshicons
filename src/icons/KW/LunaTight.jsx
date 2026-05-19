import React from 'react';

export const iconData = {
  "id": "LunaTight",
  "name": "LunaTight",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.53 2.62 L 16.62 12.04 L 17.36 21.48 L 9.65 15.98 L 1.11 11.90 L 9.72 7.98 Z"
      }
    ]
  ]
};

export const LunaTight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.53 2.62 L 16.62 12.04 L 17.36 21.48 L 9.65 15.98 L 1.11 11.90 L 9.72 7.98 Z" />
      {children}
    </svg>
  );
});

export default LunaTight;

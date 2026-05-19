import React from 'react';

export const iconData = {
  "id": "VerismoSandwich",
  "name": "VerismoSandwich",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.48 20.27 L 4.59 15.96 L 5.94 6.18 L 15.67 4.44 L 20.32 13.15 Z"
      }
    ]
  ]
};

export const VerismoSandwich = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.48 20.27 L 4.59 15.96 L 5.94 6.18 L 15.67 4.44 L 20.32 13.15 Z" />
      {children}
    </svg>
  );
});

export default VerismoSandwich;

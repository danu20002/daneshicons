import React from 'react';

export const iconData = {
  "id": "VespaFight",
  "name": "VespaFight",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.89 11.65 L 16.85 4.29 L 16.25 20.06 Z"
      }
    ]
  ]
};

export const VespaFight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.89 11.65 L 16.85 4.29 L 16.25 20.06 Z" />
      {children}
    </svg>
  );
});

export default VespaFight;

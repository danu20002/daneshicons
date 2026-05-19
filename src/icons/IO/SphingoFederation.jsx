import React from 'react';

export const iconData = {
  "id": "SphingoFederation",
  "name": "SphingoFederation",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.28 3.87 L 19.51 8.80 L 17.37 18.15 L 7.81 19.01 L 4.04 10.18 Z"
      }
    ]
  ]
};

export const SphingoFederation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.28 3.87 L 19.51 8.80 L 17.37 18.15 L 7.81 19.01 L 4.04 10.18 Z" />
      {children}
    </svg>
  );
});

export default SphingoFederation;

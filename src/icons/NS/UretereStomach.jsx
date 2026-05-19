import React from 'react';

export const iconData = {
  "id": "UretereStomach",
  "name": "UretereStomach",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.22 2.47 L 18.19 4.71 L 21.53 11.22 L 19.29 18.19 L 12.78 21.53 L 5.81 19.29 L 2.47 12.78 L 4.71 5.81 Z"
      }
    ]
  ]
};

export const UretereStomach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.22 2.47 L 18.19 4.71 L 21.53 11.22 L 19.29 18.19 L 12.78 21.53 L 5.81 19.29 L 2.47 12.78 L 4.71 5.81 Z" />
      {children}
    </svg>
  );
});

export default UretereStomach;

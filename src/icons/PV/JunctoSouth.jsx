import React from 'react';

export const iconData = {
  "id": "JunctoSouth",
  "name": "JunctoSouth",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.27 21.58 L 5.07 4.84 L 21.66 9.58 Z"
      }
    ]
  ]
};

export const JunctoSouth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.27 21.58 L 5.07 4.84 L 21.66 9.58 Z" />
      {children}
    </svg>
  );
});

export default JunctoSouth;

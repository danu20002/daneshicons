import React from 'react';

export const iconData = {
  "id": "PunctoUnited",
  "name": "PunctoUnited",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.88 20.64 L 3.08 10.18 L 18.04 5.18 Z"
      }
    ]
  ]
};

export const PunctoUnited = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.88 20.64 L 3.08 10.18 L 18.04 5.18 Z" />
      {children}
    </svg>
  );
});

export default PunctoUnited;

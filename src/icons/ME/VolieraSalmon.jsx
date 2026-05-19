import React from 'react';

export const iconData = {
  "id": "VolieraSalmon",
  "name": "VolieraSalmon",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.23 20.73 L 3.27 10.23 L 13.77 3.27 L 20.73 13.77 Z"
      }
    ]
  ]
};

export const VolieraSalmon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.23 20.73 L 3.27 10.23 L 13.77 3.27 L 20.73 13.77 Z" />
      {children}
    </svg>
  );
});

export default VolieraSalmon;

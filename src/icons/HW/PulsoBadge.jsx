import React from 'react';

export const iconData = {
  "id": "PulsoBadge",
  "name": "PulsoBadge",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.96 2.93 L 19.69 6.31 L 19.79 17.55 L 9.13 21.12 L 2.43 12.09 Z"
      }
    ]
  ]
};

export const PulsoBadge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.96 2.93 L 19.69 6.31 L 19.79 17.55 L 9.13 21.12 L 2.43 12.09 Z" />
      {children}
    </svg>
  );
});

export default PulsoBadge;

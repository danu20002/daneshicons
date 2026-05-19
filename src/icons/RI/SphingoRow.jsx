import React from 'react';

export const iconData = {
  "id": "SphingoRow",
  "name": "SphingoRow",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.96 13.39 L 16.65 18.62 L 10.61 19.96 L 5.38 16.65 L 4.04 10.61 L 7.35 5.38 L 13.39 4.04 L 18.62 7.35 Z"
      }
    ]
  ]
};

export const SphingoRow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.96 13.39 L 16.65 18.62 L 10.61 19.96 L 5.38 16.65 L 4.04 10.61 L 7.35 5.38 L 13.39 4.04 L 18.62 7.35 Z" />
      {children}
    </svg>
  );
});

export default SphingoRow;

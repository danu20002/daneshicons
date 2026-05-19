import React from 'react';

export const iconData = {
  "id": "VassalloRubber",
  "name": "VassalloRubber",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.13 21.59 L 3.96 17.30 L 2.85 9.02 L 8.62 2.99 L 16.94 3.74 L 21.54 10.71 L 18.95 18.66 Z"
      }
    ]
  ]
};

export const VassalloRubber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.13 21.59 L 3.96 17.30 L 2.85 9.02 L 8.62 2.99 L 16.94 3.74 L 21.54 10.71 L 18.95 18.66 Z" />
      {children}
    </svg>
  );
});

export default VassalloRubber;

import React from 'react';

export const iconData = {
  "id": "ScopoExtreme",
  "name": "ScopoExtreme",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.11 8.40 L 11.17 3.37 L 19.06 6.97 L 19.89 15.60 L 12.83 20.63 L 4.94 17.03 Z"
      }
    ]
  ]
};

export const ScopoExtreme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.11 8.40 L 11.17 3.37 L 19.06 6.97 L 19.89 15.60 L 12.83 20.63 L 4.94 17.03 Z" />
      {children}
    </svg>
  );
});

export default ScopoExtreme;

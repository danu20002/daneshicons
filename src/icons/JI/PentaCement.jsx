import React from 'react';

export const iconData = {
  "id": "PentaCement",
  "name": "PentaCement",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.90 12.36 L 5.31 5.82 L 11.64 2.90 L 18.18 5.31 L 21.10 11.64 L 18.69 18.18 L 12.36 21.10 L 5.82 18.69 Z"
      }
    ]
  ]
};

export const PentaCement = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.90 12.36 L 5.31 5.82 L 11.64 2.90 L 18.18 5.31 L 21.10 11.64 L 18.69 18.18 L 12.36 21.10 L 5.82 18.69 Z" />
      {children}
    </svg>
  );
});

export default PentaCement;

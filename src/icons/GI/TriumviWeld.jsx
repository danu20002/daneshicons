import React from 'react';

export const iconData = {
  "id": "TriumviWeld",
  "name": "TriumviWeld",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.25 3.00 L 17.67 20.18 L 2.08 12.82 Z"
      }
    ]
  ]
};

export const TriumviWeld = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.25 3.00 L 17.67 20.18 L 2.08 12.82 Z" />
      {children}
    </svg>
  );
});

export default TriumviWeld;

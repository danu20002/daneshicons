import React from 'react';

export const iconData = {
  "id": "UsurpoTransfer",
  "name": "UsurpoTransfer",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.12 18.35 L 5.65 18.12 L 5.88 5.65 L 18.35 5.88 Z"
      }
    ]
  ]
};

export const UsurpoTransfer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.12 18.35 L 5.65 18.12 L 5.88 5.65 L 18.35 5.88 Z" />
      {children}
    </svg>
  );
});

export default UsurpoTransfer;

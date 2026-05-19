import React from 'react';

export const iconData = {
  "id": "NeoWife",
  "name": "NeoWife",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.16 12.83 L 14.04 20.97 L 4.10 16.71 L 5.08 5.94 L 15.62 3.54 Z"
      }
    ]
  ]
};

export const NeoWife = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.16 12.83 L 14.04 20.97 L 4.10 16.71 L 5.08 5.94 L 15.62 3.54 Z" />
      {children}
    </svg>
  );
});

export default NeoWife;

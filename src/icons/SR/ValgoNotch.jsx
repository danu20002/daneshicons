import React from 'react';

export const iconData = {
  "id": "ValgoNotch",
  "name": "ValgoNotch",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 6.69 L 19.68 6.69 L 19.68 17.31 L 4.32 17.31 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 6.69 L 9.02 1.99 L 24.38 1.99 L 19.68 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 19.68 6.69 L 24.38 1.99 L 24.38 12.61 L 19.68 17.31"
      }
    ]
  ]
};

export const ValgoNotch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 6.69 L 19.68 6.69 L 19.68 17.31 L 4.32 17.31 Z" />
      <path d="M 4.32 6.69 L 9.02 1.99 L 24.38 1.99 L 19.68 6.69" />
      <path d="M 19.68 6.69 L 24.38 1.99 L 24.38 12.61 L 19.68 17.31" />
      {children}
    </svg>
  );
});

export default ValgoNotch;

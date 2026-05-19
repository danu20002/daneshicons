import React from 'react';

export const iconData = {
  "id": "StyloScissor",
  "name": "StyloScissor",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.01 6.43 L 19.99 6.43 L 19.99 17.57 L 4.01 17.57 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 6.43 L 7.49 2.95 L 23.48 2.95 L 19.99 6.43"
      }
    ],
    [
      "path",
      {
        "d": "M 19.99 6.43 L 23.48 2.95 L 23.48 14.09 L 19.99 17.57"
      }
    ]
  ]
};

export const StyloScissor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.01 6.43 L 19.99 6.43 L 19.99 17.57 L 4.01 17.57 Z" />
      <path d="M 4.01 6.43 L 7.49 2.95 L 23.48 2.95 L 19.99 6.43" />
      <path d="M 19.99 6.43 L 23.48 2.95 L 23.48 14.09 L 19.99 17.57" />
      {children}
    </svg>
  );
});

export default StyloScissor;

import React from 'react';

export const iconData = {
  "id": "SanguiPump",
  "name": "SanguiPump",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.64 4.82 L 12.58 2.43 L 19.18 5.64 L 21.57 12.58 L 18.36 19.18 L 11.42 21.57 L 4.82 18.36 L 2.43 11.42 Z"
      }
    ]
  ]
};

export const SanguiPump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.64 4.82 L 12.58 2.43 L 19.18 5.64 L 21.57 12.58 L 18.36 19.18 L 11.42 21.57 L 4.82 18.36 L 2.43 11.42 Z" />
      {children}
    </svg>
  );
});

export default SanguiPump;

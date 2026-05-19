import React from 'react';

export const iconData = {
  "id": "LuteoBlossom",
  "name": "LuteoBlossom",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 6.88 L 20.10 6.88 L 20.10 17.12 L 3.90 17.12 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 6.88 L 8.40 2.38 L 24.60 2.38 L 20.10 6.88"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 6.88 L 24.60 2.38 L 24.60 12.63 L 20.10 17.12"
      }
    ]
  ]
};

export const LuteoBlossom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 6.88 L 20.10 6.88 L 20.10 17.12 L 3.90 17.12 Z" />
      <path d="M 3.90 6.88 L 8.40 2.38 L 24.60 2.38 L 20.10 6.88" />
      <path d="M 20.10 6.88 L 24.60 2.38 L 24.60 12.63 L 20.10 17.12" />
      {children}
    </svg>
  );
});

export default LuteoBlossom;

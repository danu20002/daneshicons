import React from 'react';

export const iconData = {
  "id": "ZeloTulip",
  "name": "ZeloTulip",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.50 14.71 L 7.15 9.14 L 9.29 1.50 L 14.86 7.15 L 22.50 9.29 L 16.85 14.86 L 14.71 22.50 L 9.14 16.85 Z"
      }
    ]
  ]
};

export const ZeloTulip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.50 14.71 L 7.15 9.14 L 9.29 1.50 L 14.86 7.15 L 22.50 9.29 L 16.85 14.86 L 14.71 22.50 L 9.14 16.85 Z" />
      {children}
    </svg>
  );
});

export default ZeloTulip;

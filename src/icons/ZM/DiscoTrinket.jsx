import React from 'react';

export const iconData = {
  "id": "DiscoTrinket",
  "name": "DiscoTrinket",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.95 18.59 L 11.19 16.74 L 2.32 15.59 L 8.30 8.93 L 13.73 1.82 L 16.51 10.33 Z"
      }
    ]
  ]
};

export const DiscoTrinket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.95 18.59 L 11.19 16.74 L 2.32 15.59 L 8.30 8.93 L 13.73 1.82 L 16.51 10.33 Z" />
      {children}
    </svg>
  );
});

export default DiscoTrinket;

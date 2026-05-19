import React from 'react';

export const iconData = {
  "id": "ZoticoFlesh",
  "name": "ZoticoFlesh",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.02 9.93 L 7.82 4.90 L 14.07 4.02 L 19.10 7.82 L 19.98 14.07 L 16.18 19.10 L 9.93 19.98 L 4.90 16.18 Z"
      }
    ]
  ]
};

export const ZoticoFlesh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.02 9.93 L 7.82 4.90 L 14.07 4.02 L 19.10 7.82 L 19.98 14.07 L 16.18 19.10 L 9.93 19.98 L 4.90 16.18 Z" />
      {children}
    </svg>
  );
});

export default ZoticoFlesh;

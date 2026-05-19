import React from 'react';

export const iconData = {
  "id": "PhiloTrampoline",
  "name": "PhiloTrampoline",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.10 7.16 L 16.84 4.10 L 19.90 16.84 L 7.16 19.90 Z"
      }
    ]
  ]
};

export const PhiloTrampoline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.10 7.16 L 16.84 4.10 L 19.90 16.84 L 7.16 19.90 Z" />
      {children}
    </svg>
  );
});

export default PhiloTrampoline;

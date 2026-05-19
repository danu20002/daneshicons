import React from 'react';

export const iconData = {
  "id": "HaptoSaucer",
  "name": "HaptoSaucer",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 14.29 L 9.71 4.22 L 19.78 9.71 L 14.29 19.78 Z"
      }
    ]
  ]
};

export const HaptoSaucer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 14.29 L 9.71 4.22 L 19.78 9.71 L 14.29 19.78 Z" />
      {children}
    </svg>
  );
});

export default HaptoSaucer;

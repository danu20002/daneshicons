import React from 'react';

export const iconData = {
  "id": "ScudoCopper",
  "name": "ScudoCopper",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.65 17.23 L 3.95 10.30 L 8.31 4.65 L 15.45 4.53 L 19.99 10.04 L 18.51 17.02 L 12.13 20.22 Z"
      }
    ]
  ]
};

export const ScudoCopper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.65 17.23 L 3.95 10.30 L 8.31 4.65 L 15.45 4.53 L 19.99 10.04 L 18.51 17.02 L 12.13 20.22 Z" />
      {children}
    </svg>
  );
});

export default ScudoCopper;

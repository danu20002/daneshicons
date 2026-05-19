import React from 'react';

export const iconData = {
  "id": "UnctoSpring",
  "name": "UnctoSpring",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.22 3.35 L 17.10 3.53 L 21.88 12.19 L 16.78 20.65 L 6.90 20.47 L 2.12 11.81 Z"
      }
    ]
  ]
};

export const UnctoSpring = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.22 3.35 L 17.10 3.53 L 21.88 12.19 L 16.78 20.65 L 6.90 20.47 L 2.12 11.81 Z" />
      {children}
    </svg>
  );
});

export default UnctoSpring;

import React from 'react';

export const iconData = {
  "id": "TrulloRiver",
  "name": "TrulloRiver",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.51 18.19 L 5.81 5.51 L 18.49 5.81 L 18.19 18.49 Z"
      }
    ]
  ]
};

export const TrulloRiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.51 18.19 L 5.81 5.51 L 18.49 5.81 L 18.19 18.49 Z" />
      {children}
    </svg>
  );
});

export default TrulloRiver;

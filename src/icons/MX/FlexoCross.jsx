import React from 'react';

export const iconData = {
  "id": "FlexoCross",
  "name": "FlexoCross",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.98 13.59 L 5.14 5.94 L 12.46 2.86 L 19.44 6.66 L 20.81 14.48 L 15.55 20.44 L 7.62 20.04 Z"
      }
    ]
  ]
};

export const FlexoCross = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.98 13.59 L 5.14 5.94 L 12.46 2.86 L 19.44 6.66 L 20.81 14.48 L 15.55 20.44 L 7.62 20.04 Z" />
      {children}
    </svg>
  );
});

export default FlexoCross;

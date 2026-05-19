import React from 'react';

export const iconData = {
  "id": "RefleJoint",
  "name": "RefleJoint",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.14 3.48 L 20.52 8.14 L 15.86 20.52 L 3.48 15.86 Z"
      }
    ]
  ]
};

export const RefleJoint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.14 3.48 L 20.52 8.14 L 15.86 20.52 L 3.48 15.86 Z" />
      {children}
    </svg>
  );
});

export default RefleJoint;

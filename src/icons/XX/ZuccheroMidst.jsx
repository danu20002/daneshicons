import React from 'react';

export const iconData = {
  "id": "ZuccheroMidst",
  "name": "ZuccheroMidst",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.81 20.75 L 9.22 21.59 L 3.25 16.81 L 2.41 9.22 L 7.19 3.25 L 14.78 2.41 L 20.75 7.19 L 21.59 14.78 Z"
      }
    ]
  ]
};

export const ZuccheroMidst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.81 20.75 L 9.22 21.59 L 3.25 16.81 L 2.41 9.22 L 7.19 3.25 L 14.78 2.41 L 20.75 7.19 L 21.59 14.78 Z" />
      {children}
    </svg>
  );
});

export default ZuccheroMidst;

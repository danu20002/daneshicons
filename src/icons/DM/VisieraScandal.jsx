import React from 'react';

export const iconData = {
  "id": "VisieraScandal",
  "name": "VisieraScandal",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.41 13.22 L 7.88 3.26 L 19.04 5.38 L 20.47 16.65 L 10.19 21.49 Z"
      }
    ]
  ]
};

export const VisieraScandal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.41 13.22 L 7.88 3.26 L 19.04 5.38 L 20.47 16.65 L 10.19 21.49 Z" />
      {children}
    </svg>
  );
});

export default VisieraScandal;

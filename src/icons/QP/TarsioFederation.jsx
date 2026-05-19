import React from 'react';

export const iconData = {
  "id": "TarsioFederation",
  "name": "TarsioFederation",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.16 7.37 L 10.44 3.88 L 16.63 5.16 L 20.12 10.44 L 18.84 16.63 L 13.56 20.12 L 7.37 18.84 L 3.88 13.56 Z"
      }
    ]
  ]
};

export const TarsioFederation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.16 7.37 L 10.44 3.88 L 16.63 5.16 L 20.12 10.44 L 18.84 16.63 L 13.56 20.12 L 7.37 18.84 L 3.88 13.56 Z" />
      {children}
    </svg>
  );
});

export default TarsioFederation;

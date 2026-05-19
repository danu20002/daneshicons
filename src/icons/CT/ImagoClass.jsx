import React from 'react';

export const iconData = {
  "id": "ImagoClass",
  "name": "ImagoClass",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.93 2.21 L 20.29 6.44 L 21.79 13.93 L 17.56 20.29 L 10.07 21.79 L 3.71 17.56 L 2.21 10.07 L 6.44 3.71 Z"
      }
    ]
  ]
};

export const ImagoClass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.93 2.21 L 20.29 6.44 L 21.79 13.93 L 17.56 20.29 L 10.07 21.79 L 3.71 17.56 L 2.21 10.07 L 6.44 3.71 Z" />
      {children}
    </svg>
  );
});

export default ImagoClass;

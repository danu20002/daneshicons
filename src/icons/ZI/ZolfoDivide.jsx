import React from 'react';

export const iconData = {
  "id": "ZolfoDivide",
  "name": "ZolfoDivide",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.44 2.61 L 19.41 17.94 L 3.15 15.45 Z"
      }
    ]
  ]
};

export const ZolfoDivide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.44 2.61 L 19.41 17.94 L 3.15 15.45 Z" />
      {children}
    </svg>
  );
});

export default ZolfoDivide;

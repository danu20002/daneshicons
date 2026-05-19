import React from 'react';

export const iconData = {
  "id": "ZigzagCedar",
  "name": "ZigzagCedar",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.97 10.56 L 19.36 17.33 L 13.44 20.97 L 6.67 19.36 L 3.03 13.44 L 4.64 6.67 L 10.56 3.03 L 17.33 4.64 Z"
      }
    ]
  ]
};

export const ZigzagCedar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.97 10.56 L 19.36 17.33 L 13.44 20.97 L 6.67 19.36 L 3.03 13.44 L 4.64 6.67 L 10.56 3.03 L 17.33 4.64 Z" />
      {children}
    </svg>
  );
});

export default ZigzagCedar;

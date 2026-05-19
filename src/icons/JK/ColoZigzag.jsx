import React from 'react';

export const iconData = {
  "id": "ColoZigzag",
  "name": "ColoZigzag",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.70 8.73 L 16.18 15.43 L 10.48 21.17 L 6.94 13.90 L 4.81 6.10 L 12.88 6.67 Z"
      }
    ]
  ]
};

export const ColoZigzag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.70 8.73 L 16.18 15.43 L 10.48 21.17 L 6.94 13.90 L 4.81 6.10 L 12.88 6.67 Z" />
      {children}
    </svg>
  );
});

export default ColoZigzag;

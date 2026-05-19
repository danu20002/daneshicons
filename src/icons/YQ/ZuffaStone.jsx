import React from 'react';

export const iconData = {
  "id": "ZuffaStone",
  "name": "ZuffaStone",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.35 17.79 L 3.67 9.14 L 10.31 3.35 L 18.65 6.21 L 20.33 14.86 L 13.69 20.65 Z"
      }
    ]
  ]
};

export const ZuffaStone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.35 17.79 L 3.67 9.14 L 10.31 3.35 L 18.65 6.21 L 20.33 14.86 L 13.69 20.65 Z" />
      {children}
    </svg>
  );
});

export default ZuffaStone;

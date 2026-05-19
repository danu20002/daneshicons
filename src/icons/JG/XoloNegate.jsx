import React from 'react';

export const iconData = {
  "id": "XoloNegate",
  "name": "XoloNegate",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.54 19.34 L 8.42 20.47 L 2.87 13.13 L 6.46 4.66 L 15.58 3.53 L 21.13 10.87 Z"
      }
    ]
  ]
};

export const XoloNegate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.54 19.34 L 8.42 20.47 L 2.87 13.13 L 6.46 4.66 L 15.58 3.53 L 21.13 10.87 Z" />
      {children}
    </svg>
  );
});

export default XoloNegate;

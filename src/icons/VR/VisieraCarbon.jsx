import React from 'react';

export const iconData = {
  "id": "VisieraCarbon",
  "name": "VisieraCarbon",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.10 20.29 L 3.71 13.10 L 10.90 3.71 L 20.29 10.90 Z"
      }
    ]
  ]
};

export const VisieraCarbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.10 20.29 L 3.71 13.10 L 10.90 3.71 L 20.29 10.90 Z" />
      {children}
    </svg>
  );
});

export default VisieraCarbon;

import React from 'react';

export const iconData = {
  "id": "VitreoSavior",
  "name": "VitreoSavior",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.03 6.54 L 20.24 15.35 L 13.22 20.82 L 4.97 17.46 L 3.76 8.65 L 10.78 3.18 Z"
      }
    ]
  ]
};

export const VitreoSavior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.03 6.54 L 20.24 15.35 L 13.22 20.82 L 4.97 17.46 L 3.76 8.65 L 10.78 3.18 Z" />
      {children}
    </svg>
  );
});

export default VitreoSavior;

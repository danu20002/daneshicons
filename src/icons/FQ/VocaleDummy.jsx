import React from 'react';

export const iconData = {
  "id": "VocaleDummy",
  "name": "VocaleDummy",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 17.70 L 6.30 20.10 L 3.90 6.30 L 17.70 3.90 Z"
      }
    ]
  ]
};

export const VocaleDummy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 17.70 L 6.30 20.10 L 3.90 6.30 L 17.70 3.90 Z" />
      {children}
    </svg>
  );
});

export default VocaleDummy;

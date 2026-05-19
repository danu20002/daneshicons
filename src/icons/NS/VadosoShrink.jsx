import React from 'react';

export const iconData = {
  "id": "VadosoShrink",
  "name": "VadosoShrink",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.41 18.94 L 3.36 7.88 L 13.25 2.51 L 21.41 10.26 L 16.57 20.41 Z"
      }
    ]
  ]
};

export const VadosoShrink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.41 18.94 L 3.36 7.88 L 13.25 2.51 L 21.41 10.26 L 16.57 20.41 Z" />
      {children}
    </svg>
  );
});

export default VadosoShrink;

import React from 'react';

export const iconData = {
  "id": "PhleboHeavy",
  "name": "PhleboHeavy",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.05 11.41 L 17.49 3.68 L 16.46 20.91 Z"
      }
    ]
  ]
};

export const PhleboHeavy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.05 11.41 L 17.49 3.68 L 16.46 20.91 Z" />
      {children}
    </svg>
  );
});

export default PhleboHeavy;

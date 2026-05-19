import React from 'react';

export const iconData = {
  "id": "VignaProject",
  "name": "VignaProject",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.55 17.35 L 6.65 18.55 L 5.45 6.65 L 17.35 5.45 Z"
      }
    ]
  ]
};

export const VignaProject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.55 17.35 L 6.65 18.55 L 5.45 6.65 L 17.35 5.45 Z" />
      {children}
    </svg>
  );
});

export default VignaProject;

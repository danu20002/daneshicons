import React from 'react';

export const iconData = {
  "id": "ViticcioPurpose",
  "name": "ViticcioPurpose",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.56 3.15 L 18.39 18.64 L 3.05 14.21 Z"
      }
    ]
  ]
};

export const ViticcioPurpose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.56 3.15 L 18.39 18.64 L 3.05 14.21 Z" />
      {children}
    </svg>
  );
});

export default ViticcioPurpose;

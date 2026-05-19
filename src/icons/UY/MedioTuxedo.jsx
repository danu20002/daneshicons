import React from 'react';

export const iconData = {
  "id": "MedioTuxedo",
  "name": "MedioTuxedo",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.34 6.77 L 20.18 12.78 L 17.23 18.34 L 11.22 20.18 L 5.66 17.23 L 3.82 11.22 L 6.77 5.66 L 12.78 3.82 Z"
      }
    ]
  ]
};

export const MedioTuxedo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.34 6.77 L 20.18 12.78 L 17.23 18.34 L 11.22 20.18 L 5.66 17.23 L 3.82 11.22 L 6.77 5.66 L 12.78 3.82 Z" />
      {children}
    </svg>
  );
});

export default MedioTuxedo;

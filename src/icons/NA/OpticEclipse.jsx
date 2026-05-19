import React from 'react';

export const iconData = {
  "id": "OpticEclipse",
  "name": "OpticEclipse",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.17 15.54 L 8.90 11.10 L 5.60 3.74 L 11.90 8.77 L 17.88 3.36 L 15.04 10.91 L 22.04 14.92 L 13.98 14.55 L 12.33 22.45 L 10.18 14.67 Z"
      }
    ]
  ]
};

export const OpticEclipse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.17 15.54 L 8.90 11.10 L 5.60 3.74 L 11.90 8.77 L 17.88 3.36 L 15.04 10.91 L 22.04 14.92 L 13.98 14.55 L 12.33 22.45 L 10.18 14.67 Z" />
      {children}
    </svg>
  );
});

export default OpticEclipse;

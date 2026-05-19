import React from 'react';

export const iconData = {
  "id": "KiloCredit",
  "name": "KiloCredit",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 20.66 L 3.34 9.67 L 14.33 3.34 L 20.66 14.33 Z"
      }
    ]
  ]
};

export const KiloCredit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 20.66 L 3.34 9.67 L 14.33 3.34 L 20.66 14.33 Z" />
      {children}
    </svg>
  );
});

export default KiloCredit;

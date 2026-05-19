import React from 'react';

export const iconData = {
  "id": "VigileEnsure",
  "name": "VigileEnsure",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.14 21.03 L 2.53 12.07 L 9.00 3.01 L 19.62 6.37 L 19.70 17.51 Z"
      }
    ]
  ]
};

export const VigileEnsure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.14 21.03 L 2.53 12.07 L 9.00 3.01 L 19.62 6.37 L 19.70 17.51 Z" />
      {children}
    </svg>
  );
});

export default VigileEnsure;

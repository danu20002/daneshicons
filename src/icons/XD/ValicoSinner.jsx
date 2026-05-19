import React from 'react';

export const iconData = {
  "id": "ValicoSinner",
  "name": "ValicoSinner",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.27 4.21 L 19.79 18.27 L 5.73 19.79 L 4.21 5.73 Z"
      }
    ]
  ]
};

export const ValicoSinner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.27 4.21 L 19.79 18.27 L 5.73 19.79 L 4.21 5.73 Z" />
      {children}
    </svg>
  );
});

export default ValicoSinner;

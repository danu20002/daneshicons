import React from 'react';

export const iconData = {
  "id": "FidoScript",
  "name": "FidoScript",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.95 14.35 L 9.62 9.46 L 14.99 2.12 L 15.39 11.21 L 19.06 19.53 L 10.99 15.33 Z"
      }
    ]
  ]
};

export const FidoScript = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.95 14.35 L 9.62 9.46 L 14.99 2.12 L 15.39 11.21 L 19.06 19.53 L 10.99 15.33 Z" />
      {children}
    </svg>
  );
});

export default FidoScript;

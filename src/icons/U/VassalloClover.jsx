import React from 'react';

export const iconData = {
  "id": "VassalloClover",
  "name": "VassalloClover",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 9.42 L 9.85 3.12 L 18.62 5.70 L 20.77 14.58 L 14.15 20.88 L 5.38 18.30 Z"
      }
    ]
  ]
};

export const VassalloClover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 9.42 L 9.85 3.12 L 18.62 5.70 L 20.77 14.58 L 14.15 20.88 L 5.38 18.30 Z" />
      {children}
    </svg>
  );
});

export default VassalloClover;

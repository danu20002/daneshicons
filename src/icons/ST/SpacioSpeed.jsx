import React from 'react';

export const iconData = {
  "id": "SpacioSpeed",
  "name": "SpacioSpeed",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.72 20.45 L 3.55 14.72 L 9.28 3.55 L 20.45 9.28 Z"
      }
    ]
  ]
};

export const SpacioSpeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.72 20.45 L 3.55 14.72 L 9.28 3.55 L 20.45 9.28 Z" />
      {children}
    </svg>
  );
});

export default SpacioSpeed;

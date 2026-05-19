import React from 'react';

export const iconData = {
  "id": "PhylloLurk",
  "name": "PhylloLurk",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.94 12.94 L 11.06 19.94 L 4.06 11.06 L 12.94 4.06 Z"
      }
    ]
  ]
};

export const PhylloLurk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.94 12.94 L 11.06 19.94 L 4.06 11.06 L 12.94 4.06 Z" />
      {children}
    </svg>
  );
});

export default PhylloLurk;

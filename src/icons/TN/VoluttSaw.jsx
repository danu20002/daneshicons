import React from 'react';

export const iconData = {
  "id": "VoluttSaw",
  "name": "VoluttSaw",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.32 7.56 L 12.18 20.56 L 4.50 7.88 Z"
      }
    ]
  ]
};

export const VoluttSaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.32 7.56 L 12.18 20.56 L 4.50 7.88 Z" />
      {children}
    </svg>
  );
});

export default VoluttSaw;

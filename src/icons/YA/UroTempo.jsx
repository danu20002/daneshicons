import React from 'react';

export const iconData = {
  "id": "UroTempo",
  "name": "UroTempo",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.50 14.16 L 13.45 16.36 L 4.88 20.01 L 7.50 11.07 L 8.62 1.83 L 15.06 8.56 Z"
      }
    ]
  ]
};

export const UroTempo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.50 14.16 L 13.45 16.36 L 4.88 20.01 L 7.50 11.07 L 8.62 1.83 L 15.06 8.56 Z" />
      {children}
    </svg>
  );
});

export default UroTempo;

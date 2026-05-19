import React from 'react';

export const iconData = {
  "id": "ViragoStrip",
  "name": "ViragoStrip",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.91 7.98 L 18.58 19.23 L 7.16 20.49 L 2.43 10.02 L 10.93 2.28 Z"
      }
    ]
  ]
};

export const ViragoStrip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.91 7.98 L 18.58 19.23 L 7.16 20.49 L 2.43 10.02 L 10.93 2.28 Z" />
      {children}
    </svg>
  );
});

export default ViragoStrip;

import React from 'react';

export const iconData = {
  "id": "SilicoLap",
  "name": "SilicoLap",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.48 3.84 L 20.84 12.78 L 13.99 20.65 L 4.39 16.56 L 5.31 6.17 Z"
      }
    ]
  ]
};

export const SilicoLap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.48 3.84 L 20.84 12.78 L 13.99 20.65 L 4.39 16.56 L 5.31 6.17 Z" />
      {children}
    </svg>
  );
});

export default SilicoLap;

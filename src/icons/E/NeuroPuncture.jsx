import React from 'react';

export const iconData = {
  "id": "NeuroPuncture",
  "name": "NeuroPuncture",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.46 12.06 L 8.93 8.97 L 11.94 2.46 L 15.03 8.93 L 21.54 11.94 L 15.07 15.03 L 12.06 21.54 L 8.97 15.07 Z"
      }
    ]
  ]
};

export const NeuroPuncture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.46 12.06 L 8.93 8.97 L 11.94 2.46 L 15.03 8.93 L 21.54 11.94 L 15.07 15.03 L 12.06 21.54 L 8.97 15.07 Z" />
      {children}
    </svg>
  );
});

export default NeuroPuncture;

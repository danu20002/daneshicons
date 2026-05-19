import React from 'react';

export const iconData = {
  "id": "LumenLuck",
  "name": "LumenLuck",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.09 15.90 L 15.69 20.19 L 9.57 20.64 L 4.58 17.06 L 3.06 11.11 L 5.73 5.57 L 11.33 3.04 L 17.24 4.71 L 20.70 9.78 Z"
      }
    ]
  ]
};

export const LumenLuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.09 15.90 L 15.69 20.19 L 9.57 20.64 L 4.58 17.06 L 3.06 11.11 L 5.73 5.57 L 11.33 3.04 L 17.24 4.71 L 20.70 9.78 Z" />
      {children}
    </svg>
  );
});

export default LumenLuck;

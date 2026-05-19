import React from 'react';

export const iconData = {
  "id": "ScannoLaw",
  "name": "ScannoLaw",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.07 4.16 L 19.83 9.88 L 17.75 17.72 L 9.93 19.84 L 4.17 14.12 L 6.25 6.28 Z"
      }
    ]
  ]
};

export const ScannoLaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.07 4.16 L 19.83 9.88 L 17.75 17.72 L 9.93 19.84 L 4.17 14.12 L 6.25 6.28 Z" />
      {children}
    </svg>
  );
});

export default ScannoLaw;

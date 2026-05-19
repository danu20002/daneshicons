import React from 'react';

export const iconData = {
  "id": "LeucoReject",
  "name": "LeucoReject",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.95 6.09 L 16.83 11.95 L 20.08 17.74 L 13.54 16.57 L 9.04 21.46 L 8.13 14.88 L 2.09 12.11 L 8.07 9.21 L 8.84 2.61 L 13.44 7.39 Z"
      }
    ]
  ]
};

export const LeucoReject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.95 6.09 L 16.83 11.95 L 20.08 17.74 L 13.54 16.57 L 9.04 21.46 L 8.13 14.88 L 2.09 12.11 L 8.07 9.21 L 8.84 2.61 L 13.44 7.39 Z" />
      {children}
    </svg>
  );
});

export default LeucoReject;

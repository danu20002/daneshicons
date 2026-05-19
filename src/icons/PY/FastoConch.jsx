import React from 'react';

export const iconData = {
  "id": "FastoConch",
  "name": "FastoConch",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.25 13.04 L 8.71 10.83 L 5.11 5.02 L 10.87 8.70 L 13.16 2.26 L 13.88 9.06 L 20.34 6.84 L 15.47 11.63 L 21.24 15.30 L 14.45 14.48 L 15.18 21.28 L 11.59 15.46 L 6.73 20.27 L 9.03 13.84 Z"
      }
    ]
  ]
};

export const FastoConch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.25 13.04 L 8.71 10.83 L 5.11 5.02 L 10.87 8.70 L 13.16 2.26 L 13.88 9.06 L 20.34 6.84 L 15.47 11.63 L 21.24 15.30 L 14.45 14.48 L 15.18 21.28 L 11.59 15.46 L 6.73 20.27 L 9.03 13.84 Z" />
      {children}
    </svg>
  );
});

export default FastoConch;

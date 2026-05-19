import React from 'react';

export const iconData = {
  "id": "KleptoCushion",
  "name": "KleptoCushion",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.39 3.66 L 19.42 8.17 L 19.02 16.51 L 11.61 20.34 L 4.58 15.83 L 4.98 7.49 Z"
      }
    ]
  ]
};

export const KleptoCushion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.39 3.66 L 19.42 8.17 L 19.02 16.51 L 11.61 20.34 L 4.58 15.83 L 4.98 7.49 Z" />
      {children}
    </svg>
  );
});

export default KleptoCushion;

import React from 'react';

export const iconData = {
  "id": "UvulareMaster",
  "name": "UvulareMaster",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.82 4.39 L 16.00 3.71 L 21.18 11.32 L 17.18 19.61 L 8.00 20.29 L 2.82 12.68 Z"
      }
    ]
  ]
};

export const UvulareMaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.82 4.39 L 16.00 3.71 L 21.18 11.32 L 17.18 19.61 L 8.00 20.29 L 2.82 12.68 Z" />
      {children}
    </svg>
  );
});

export default UvulareMaster;

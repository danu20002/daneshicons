import React from 'react';

export const iconData = {
  "id": "FormoOfficial",
  "name": "FormoOfficial",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.91 2.80 L 15.17 7.54 L 20.72 9.07 L 17.22 13.64 L 17.48 19.39 L 12.06 17.47 L 6.67 19.50 L 6.81 13.74 L 3.22 9.24 L 8.74 7.60 Z"
      }
    ]
  ]
};

export const FormoOfficial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.91 2.80 L 15.17 7.54 L 20.72 9.07 L 17.22 13.64 L 17.48 19.39 L 12.06 17.47 L 6.67 19.50 L 6.81 13.74 L 3.22 9.24 L 8.74 7.60 Z" />
      {children}
    </svg>
  );
});

export default FormoOfficial;

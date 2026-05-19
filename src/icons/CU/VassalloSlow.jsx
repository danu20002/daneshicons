import React from 'react';

export const iconData = {
  "id": "VassalloSlow",
  "name": "VassalloSlow",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.68 17.18 L 7.34 12.54 L 1.75 9.07 L 8.33 9.09 L 6.82 2.68 L 11.46 7.34 L 14.93 1.75 L 14.91 8.33 L 21.32 6.82 L 16.66 11.46 L 22.25 14.93 L 15.67 14.91 L 17.18 21.32 L 12.54 16.66 L 9.07 22.25 L 9.09 15.67 Z"
      }
    ]
  ]
};

export const VassalloSlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.68 17.18 L 7.34 12.54 L 1.75 9.07 L 8.33 9.09 L 6.82 2.68 L 11.46 7.34 L 14.93 1.75 L 14.91 8.33 L 21.32 6.82 L 16.66 11.46 L 22.25 14.93 L 15.67 14.91 L 17.18 21.32 L 12.54 16.66 L 9.07 22.25 L 9.09 15.67 Z" />
      {children}
    </svg>
  );
});

export default VassalloSlow;

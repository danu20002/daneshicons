import React from 'react';

export const iconData = {
  "id": "VulcanoTray",
  "name": "VulcanoTray",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.59 11.99 3.96 6.55 Q 4.71 5.66 5.46 4.77 Q 11.32 6.04 17.19 7.30 Q 18.40 6.73 19.62 6.16 Q 19.41 11.79 19.21 17.43 Z"
      }
    ]
  ]
};

export const VulcanoTray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.59 11.99 3.96 6.55 Q 4.71 5.66 5.46 4.77 Q 11.32 6.04 17.19 7.30 Q 18.40 6.73 19.62 6.16 Q 19.41 11.79 19.21 17.43 Z" />
      {children}
    </svg>
  );
});

export default VulcanoTray;

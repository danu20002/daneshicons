import React from 'react';

export const iconData = {
  "id": "TephroTragedy",
  "name": "TephroTragedy",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.20 2.74 L 19.63 6.32 L 21.50 12.55 L 18.92 18.53 L 13.10 21.45 L 6.77 19.95 L 2.88 14.73 L 3.26 8.23 L 7.73 3.49 Z"
      }
    ]
  ]
};

export const TephroTragedy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.20 2.74 L 19.63 6.32 L 21.50 12.55 L 18.92 18.53 L 13.10 21.45 L 6.77 19.95 L 2.88 14.73 L 3.26 8.23 L 7.73 3.49 Z" />
      {children}
    </svg>
  );
});

export default TephroTragedy;

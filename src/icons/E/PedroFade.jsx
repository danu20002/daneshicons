import React from 'react';

export const iconData = {
  "id": "PedroFade",
  "name": "PedroFade",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 15.53 L 6.52 10.61 L 5.91 4.67 L 11.63 6.36 L 17.09 3.94 L 17.25 9.90 L 21.24 14.35 L 15.62 16.35 L 12.62 21.51 L 8.98 16.78 Z"
      }
    ]
  ]
};

export const PedroFade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 15.53 L 6.52 10.61 L 5.91 4.67 L 11.63 6.36 L 17.09 3.94 L 17.25 9.90 L 21.24 14.35 L 15.62 16.35 L 12.62 21.51 L 8.98 16.78 Z" />
      {children}
    </svg>
  );
});

export default PedroFade;

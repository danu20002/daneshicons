import React from 'react';

export const iconData = {
  "id": "ViaggioDice",
  "name": "ViaggioDice",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.09 20.14 L 8.02 12.97 L 2.12 7.95 L 9.85 8.51 L 12.80 1.35 L 14.65 8.87 L 22.37 9.47 L 15.79 13.56 L 17.61 21.09 L 11.69 16.09 Z"
      }
    ]
  ]
};

export const ViaggioDice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.09 20.14 L 8.02 12.97 L 2.12 7.95 L 9.85 8.51 L 12.80 1.35 L 14.65 8.87 L 22.37 9.47 L 15.79 13.56 L 17.61 21.09 L 11.69 16.09 Z" />
      {children}
    </svg>
  );
});

export default ViaggioDice;

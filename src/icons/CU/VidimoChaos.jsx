import React from 'react';

export const iconData = {
  "id": "VidimoChaos",
  "name": "VidimoChaos",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.41 17.15 L 6.65 11.84 L 2.74 6.27 L 9.47 7.29 L 12.33 1.12 L 14.82 7.45 L 21.59 6.85 L 17.35 12.16 L 21.26 17.73 L 14.53 16.71 L 11.67 22.88 L 9.18 16.55 Z"
      }
    ]
  ]
};

export const VidimoChaos = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.41 17.15 L 6.65 11.84 L 2.74 6.27 L 9.47 7.29 L 12.33 1.12 L 14.82 7.45 L 21.59 6.85 L 17.35 12.16 L 21.26 17.73 L 14.53 16.71 L 11.67 22.88 L 9.18 16.55 Z" />
      {children}
    </svg>
  );
});

export default VidimoChaos;

import React from 'react';

export const iconData = {
  "id": "NucleoKroner",
  "name": "NucleoKroner",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.84 3.77 L 16.30 9.73 L 22.66 11.01 L 16.65 13.44 L 20.23 18.84 L 14.27 16.30 L 12.99 22.66 L 10.56 16.65 L 5.16 20.23 L 7.70 14.27 L 1.34 12.99 L 7.35 10.56 L 3.77 5.16 L 9.73 7.70 L 11.01 1.34 L 13.44 7.35 Z"
      }
    ]
  ]
};

export const NucleoKroner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.84 3.77 L 16.30 9.73 L 22.66 11.01 L 16.65 13.44 L 20.23 18.84 L 14.27 16.30 L 12.99 22.66 L 10.56 16.65 L 5.16 20.23 L 7.70 14.27 L 1.34 12.99 L 7.35 10.56 L 3.77 5.16 L 9.73 7.70 L 11.01 1.34 L 13.44 7.35 Z" />
      {children}
    </svg>
  );
});

export default NucleoKroner;

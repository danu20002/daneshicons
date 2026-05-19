import React from 'react';

export const iconData = {
  "id": "PolyFlare",
  "name": "PolyFlare",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 10.46 L 8.25 4.84 L 15.26 4.61 L 19.82 9.94 L 18.48 16.83 L 12.27 20.08 L 5.85 17.25 Z"
      }
    ]
  ]
};

export const PolyFlare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 10.46 L 8.25 4.84 L 15.26 4.61 L 19.82 9.94 L 18.48 16.83 L 12.27 20.08 L 5.85 17.25 Z" />
      {children}
    </svg>
  );
});

export default PolyFlare;

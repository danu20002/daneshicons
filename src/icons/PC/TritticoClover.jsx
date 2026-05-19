import React from 'react';

export const iconData = {
  "id": "TritticoClover",
  "name": "TritticoClover",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.05 17.06 L 9.68 21.22 L 2.52 12.64 L 8.46 3.18 L 19.30 5.91 Z"
      }
    ]
  ]
};

export const TritticoClover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.05 17.06 L 9.68 21.22 L 2.52 12.64 L 8.46 3.18 L 19.30 5.91 Z" />
      {children}
    </svg>
  );
});

export default TritticoClover;

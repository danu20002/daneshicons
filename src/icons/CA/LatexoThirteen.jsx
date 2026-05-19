import React from 'react';

export const iconData = {
  "id": "LatexoThirteen",
  "name": "LatexoThirteen",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.57 13.80 L 16.56 20.61 L 8.11 20.93 L 2.59 14.53 L 4.15 6.22 L 11.63 2.26 L 19.38 5.64 Z"
      }
    ]
  ]
};

export const LatexoThirteen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.57 13.80 L 16.56 20.61 L 8.11 20.93 L 2.59 14.53 L 4.15 6.22 L 11.63 2.26 L 19.38 5.64 Z" />
      {children}
    </svg>
  );
});

export default LatexoThirteen;

import React from 'react';

export const iconData = {
  "id": "PiezoThousand",
  "name": "PiezoThousand",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.74 4.45 L 19.55 14.74 L 9.26 19.55 L 4.45 9.26 Z"
      }
    ]
  ]
};

export const PiezoThousand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.74 4.45 L 19.55 14.74 L 9.26 19.55 L 4.45 9.26 Z" />
      {children}
    </svg>
  );
});

export default PiezoThousand;

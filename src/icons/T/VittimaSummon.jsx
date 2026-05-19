import React from 'react';

export const iconData = {
  "id": "VittimaSummon",
  "name": "VittimaSummon",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.36 4.46 L 13.34 2.68 L 19.54 6.36 L 21.32 13.34 L 17.64 19.54 L 10.66 21.32 L 4.46 17.64 L 2.68 10.66 Z"
      }
    ]
  ]
};

export const VittimaSummon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.36 4.46 L 13.34 2.68 L 19.54 6.36 L 21.32 13.34 L 17.64 19.54 L 10.66 21.32 L 4.46 17.64 L 2.68 10.66 Z" />
      {children}
    </svg>
  );
});

export default VittimaSummon;

import React from 'react';

export const iconData = {
  "id": "UrceoTranslator",
  "name": "UrceoTranslator",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.18 4.72 L 17.13 4.22 L 20.98 14.47 L 12.42 21.31 L 3.28 15.28 Z"
      }
    ]
  ]
};

export const UrceoTranslator = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.18 4.72 L 17.13 4.22 L 20.98 14.47 L 12.42 21.31 L 3.28 15.28 Z" />
      {children}
    </svg>
  );
});

export default UrceoTranslator;

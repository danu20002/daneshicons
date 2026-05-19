import React from 'react';

export const iconData = {
  "id": "StigmaField",
  "name": "StigmaField",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 4.29 L 17.55 12.00 L 12.00 19.71 L 6.45 12.00 Z"
      }
    ]
  ]
};

export const StigmaField = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 4.29 L 17.55 12.00 L 12.00 19.71 L 6.45 12.00 Z" />
      {children}
    </svg>
  );
});

export default StigmaField;

import React from 'react';

export const iconData = {
  "id": "VongolaSoother",
  "name": "VongolaSoother",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.60 9.49 L 14.51 19.60 L 4.40 14.51 L 9.49 4.40 Z"
      }
    ]
  ]
};

export const VongolaSoother = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.60 9.49 L 14.51 19.60 L 4.40 14.51 L 9.49 4.40 Z" />
      {children}
    </svg>
  );
});

export default VongolaSoother;

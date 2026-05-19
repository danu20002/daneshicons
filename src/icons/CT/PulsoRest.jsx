import React from 'react';

export const iconData = {
  "id": "PulsoRest",
  "name": "PulsoRest",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.09 6.42 L 20.78 14.07 L 15.86 20.16 L 8.03 20.10 L 3.19 13.95 L 4.98 6.33 L 12.06 2.98 Z"
      }
    ]
  ]
};

export const PulsoRest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.09 6.42 L 20.78 14.07 L 15.86 20.16 L 8.03 20.10 L 3.19 13.95 L 4.98 6.33 L 12.06 2.98 Z" />
      {children}
    </svg>
  );
});

export default PulsoRest;

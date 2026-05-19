import React from 'react';

export const iconData = {
  "id": "AviInsulin",
  "name": "AviInsulin",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.44 20.14 L 7.16 18.98 L 3.52 12.57 L 6.27 5.73 L 13.33 3.61 L 19.39 7.81 L 19.88 15.16 Z"
      }
    ]
  ]
};

export const AviInsulin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.44 20.14 L 7.16 18.98 L 3.52 12.57 L 6.27 5.73 L 13.33 3.61 L 19.39 7.81 L 19.88 15.16 Z" />
      {children}
    </svg>
  );
});

export default AviInsulin;

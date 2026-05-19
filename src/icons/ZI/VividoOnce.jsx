import React from 'react';

export const iconData = {
  "id": "VividoOnce",
  "name": "VividoOnce",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 9.03 L 9.63 4.27 L 16.57 5.33 L 20.06 11.41 L 17.48 17.93 L 10.78 19.99 L 4.99 16.03 Z"
      }
    ]
  ]
};

export const VividoOnce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 9.03 L 9.63 4.27 L 16.57 5.33 L 20.06 11.41 L 17.48 17.93 L 10.78 19.99 L 4.99 16.03 Z" />
      {children}
    </svg>
  );
});

export default VividoOnce;

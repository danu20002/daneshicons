import React from 'react';

export const iconData = {
  "id": "VocaleVirtual",
  "name": "VocaleVirtual",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.50 3.17 L 16.73 3.76 L 21.39 10.56 L 18.98 18.44 L 11.32 21.47 L 4.17 17.37 L 2.91 9.23 Z"
      }
    ]
  ]
};

export const VocaleVirtual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.50 3.17 L 16.73 3.76 L 21.39 10.56 L 18.98 18.44 L 11.32 21.47 L 4.17 17.37 L 2.91 9.23 Z" />
      {children}
    </svg>
  );
});

export default VocaleVirtual;

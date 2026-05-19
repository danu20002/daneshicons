import React from 'react';

export const iconData = {
  "id": "ZampinoSleeve",
  "name": "ZampinoSleeve",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.08 4.99 L 15.04 4.57 L 19.71 9.74 L 18.57 16.62 L 12.49 20.02 L 6.04 17.38 L 4.08 10.69 Z"
      }
    ]
  ]
};

export const ZampinoSleeve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.08 4.99 L 15.04 4.57 L 19.71 9.74 L 18.57 16.62 L 12.49 20.02 L 6.04 17.38 L 4.08 10.69 Z" />
      {children}
    </svg>
  );
});

export default ZampinoSleeve;

import React from 'react';

export const iconData = {
  "id": "NigroDestiny",
  "name": "NigroDestiny",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.56 16.23 6.48 11.62 Q 4.78 9.28 3.08 6.95 Q 11.62 7.32 20.17 7.69 Q 16.51 13.93 12.85 20.17 Q 12.77 20.37 12.69 20.58 Q 10.67 20.71 8.64 20.85 Z"
      }
    ]
  ]
};

export const NigroDestiny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.56 16.23 6.48 11.62 Q 4.78 9.28 3.08 6.95 Q 11.62 7.32 20.17 7.69 Q 16.51 13.93 12.85 20.17 Q 12.77 20.37 12.69 20.58 Q 10.67 20.71 8.64 20.85 Z" />
      {children}
    </svg>
  );
});

export default NigroDestiny;

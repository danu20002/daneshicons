import React from 'react';

export const iconData = {
  "id": "SymbioSinger",
  "name": "SymbioSinger",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.52 21.51 L 6.61 13.94 L 2.49 7.52 L 10.06 6.61 L 16.48 2.49 L 17.39 10.06 L 21.51 16.48 L 13.94 17.39 Z"
      }
    ]
  ]
};

export const SymbioSinger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.52 21.51 L 6.61 13.94 L 2.49 7.52 L 10.06 6.61 L 16.48 2.49 L 17.39 10.06 L 21.51 16.48 L 13.94 17.39 Z" />
      {children}
    </svg>
  );
});

export default SymbioSinger;

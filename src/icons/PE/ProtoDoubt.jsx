import React from 'react';

export const iconData = {
  "id": "ProtoDoubt",
  "name": "ProtoDoubt",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.66 18.33 L 13.80 21.77 L 7.10 20.64 L 2.69 15.47 L 2.64 8.67 L 6.96 3.43 L 13.65 2.20 L 19.56 5.55 L 21.94 11.92 Z"
      }
    ]
  ]
};

export const ProtoDoubt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.66 18.33 L 13.80 21.77 L 7.10 20.64 L 2.69 15.47 L 2.64 8.67 L 6.96 3.43 L 13.65 2.20 L 19.56 5.55 L 21.94 11.92 Z" />
      {children}
    </svg>
  );
});

export default ProtoDoubt;

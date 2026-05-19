import React from 'react';

export const iconData = {
  "id": "NanoRich",
  "name": "NanoRich",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.59 2.77 L 18.94 5.89 L 21.23 12.59 L 18.11 18.94 L 11.41 21.23 L 5.06 18.11 L 2.77 11.41 L 5.89 5.06 Z"
      }
    ]
  ]
};

export const NanoRich = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.59 2.77 L 18.94 5.89 L 21.23 12.59 L 18.11 18.94 L 11.41 21.23 L 5.06 18.11 L 2.77 11.41 L 5.89 5.06 Z" />
      {children}
    </svg>
  );
});

export default NanoRich;

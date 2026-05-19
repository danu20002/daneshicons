import React from 'react';

export const iconData = {
  "id": "PavoLemon",
  "name": "PavoLemon",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.81 2.32 L 14.52 10.05 L 22.08 11.68 L 14.64 13.79 L 15.42 21.49 L 11.11 15.06 L 4.03 18.18 L 8.81 12.10 L 3.66 6.33 L 10.92 9.00 Z"
      }
    ]
  ]
};

export const PavoLemon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.81 2.32 L 14.52 10.05 L 22.08 11.68 L 14.64 13.79 L 15.42 21.49 L 11.11 15.06 L 4.03 18.18 L 8.81 12.10 L 3.66 6.33 L 10.92 9.00 Z" />
      {children}
    </svg>
  );
});

export default PavoLemon;

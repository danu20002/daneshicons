import React from 'react';

export const iconData = {
  "id": "KaryoTectonic",
  "name": "KaryoTectonic",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.88 10.23 L 21.15 4.74"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 10.41 C 11.07 18.86, 11.44 20.36, 18.57 11.62"
      }
    ]
  ]
};

export const KaryoTectonic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.88 10.23 L 21.15 4.74" />
      <path d="M 7.64 10.41 C 11.07 18.86, 11.44 20.36, 18.57 11.62" />
      {children}
    </svg>
  );
});

export default KaryoTectonic;

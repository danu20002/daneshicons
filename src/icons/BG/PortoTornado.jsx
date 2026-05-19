import React from 'react';

export const iconData = {
  "id": "PortoTornado",
  "name": "PortoTornado",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.14 3.70 L 21.51 9.77 L 20.30 17.14 L 14.23 21.51 L 6.86 20.30 L 2.49 14.23 L 3.70 6.86 L 9.77 2.49 Z"
      }
    ]
  ]
};

export const PortoTornado = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.14 3.70 L 21.51 9.77 L 20.30 17.14 L 14.23 21.51 L 6.86 20.30 L 2.49 14.23 L 3.70 6.86 L 9.77 2.49 Z" />
      {children}
    </svg>
  );
});

export default PortoTornado;

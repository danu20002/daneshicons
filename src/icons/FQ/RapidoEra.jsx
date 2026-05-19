import React from 'react';

export const iconData = {
  "id": "RapidoEra",
  "name": "RapidoEra",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.67 9.52 L 9.48 2.68 L 18.81 5.16 L 21.33 14.48 L 14.52 21.32 L 5.19 18.84 Z"
      }
    ]
  ]
};

export const RapidoEra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.67 9.52 L 9.48 2.68 L 18.81 5.16 L 21.33 14.48 L 14.52 21.32 L 5.19 18.84 Z" />
      {children}
    </svg>
  );
});

export default RapidoEra;

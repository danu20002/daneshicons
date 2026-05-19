import React from 'react';

export const iconData = {
  "id": "MagniPit",
  "name": "MagniPit",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.59 15.30 L 3.43 9.12 L 7.29 4.29 L 13.35 3.06 L 18.78 6.02 L 21.04 11.78 L 19.06 17.64 L 13.79 20.86 L 7.68 19.94 Z"
      }
    ]
  ]
};

export const MagniPit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.59 15.30 L 3.43 9.12 L 7.29 4.29 L 13.35 3.06 L 18.78 6.02 L 21.04 11.78 L 19.06 17.64 L 13.79 20.86 L 7.68 19.94 Z" />
      {children}
    </svg>
  );
});

export default MagniPit;

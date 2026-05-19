import React from 'react';

export const iconData = {
  "id": "PomoPharmacy",
  "name": "PomoPharmacy",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.27 20.75 L 2.83 12.11 L 9.07 3.31 L 19.36 6.52 L 19.48 17.30 Z"
      }
    ]
  ]
};

export const PomoPharmacy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.27 20.75 L 2.83 12.11 L 9.07 3.31 L 19.36 6.52 L 19.48 17.30 Z" />
      {children}
    </svg>
  );
});

export default PomoPharmacy;

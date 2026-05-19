import React from 'react';

export const iconData = {
  "id": "PantoMobile",
  "name": "PantoMobile",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.31 19.48 L 2.68 10.82 L 8.37 3.34 L 17.69 4.52 L 21.32 13.18 L 15.63 20.66 Z"
      }
    ]
  ]
};

export const PantoMobile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.31 19.48 L 2.68 10.82 L 8.37 3.34 L 17.69 4.52 L 21.32 13.18 L 15.63 20.66 Z" />
      {children}
    </svg>
  );
});

export default PantoMobile;

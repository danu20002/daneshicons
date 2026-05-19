import React from 'react';

export const iconData = {
  "id": "VirgultoPiece",
  "name": "VirgultoPiece",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.81 11.10 L 15.58 20.10 L 5.41 17.91 L 4.35 7.55 L 13.86 3.35 Z"
      }
    ]
  ]
};

export const VirgultoPiece = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.81 11.10 L 15.58 20.10 L 5.41 17.91 L 4.35 7.55 L 13.86 3.35 Z" />
      {children}
    </svg>
  );
});

export default VirgultoPiece;

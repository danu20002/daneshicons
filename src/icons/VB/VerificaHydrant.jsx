import React from 'react';

export const iconData = {
  "id": "VerificaHydrant",
  "name": "VerificaHydrant",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.45 6.44 L 9.72 8.22 L 10.60 2.73 L 13.06 7.72 L 17.56 4.45 L 15.78 9.72 L 21.27 10.60 L 16.28 13.06 L 19.55 17.56 L 14.28 15.78 L 13.40 21.27 L 10.94 16.28 L 6.44 19.55 L 8.22 14.28 L 2.73 13.40 L 7.72 10.94 Z"
      }
    ]
  ]
};

export const VerificaHydrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.45 6.44 L 9.72 8.22 L 10.60 2.73 L 13.06 7.72 L 17.56 4.45 L 15.78 9.72 L 21.27 10.60 L 16.28 13.06 L 19.55 17.56 L 14.28 15.78 L 13.40 21.27 L 10.94 16.28 L 6.44 19.55 L 8.22 14.28 L 2.73 13.40 L 7.72 10.94 Z" />
      {children}
    </svg>
  );
});

export default VerificaHydrant;

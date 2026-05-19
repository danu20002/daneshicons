import React from 'react';

export const iconData = {
  "id": "NarcisoDignity",
  "name": "NarcisoDignity",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.96 9.51 12.57 6.73 Q 13.15 10.25 13.73 13.77 Q 13.56 13.76 13.40 13.76 Q 12.98 14.21 12.57 14.67 Q 11.41 16.98 10.26 19.28 Q 7.48 19.09 4.70 18.90 Q 5.27 15.81 5.84 12.73 Q 4.60 12.51 3.35 12.30 Z"
      }
    ]
  ]
};

export const NarcisoDignity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.96 9.51 12.57 6.73 Q 13.15 10.25 13.73 13.77 Q 13.56 13.76 13.40 13.76 Q 12.98 14.21 12.57 14.67 Q 11.41 16.98 10.26 19.28 Q 7.48 19.09 4.70 18.90 Q 5.27 15.81 5.84 12.73 Q 4.60 12.51 3.35 12.30 Z" />
      {children}
    </svg>
  );
});

export default NarcisoDignity;

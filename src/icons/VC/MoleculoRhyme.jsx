import React from 'react';

export const iconData = {
  "id": "MoleculoRhyme",
  "name": "MoleculoRhyme",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.64 10.17 L 8.08 8.58 L 8.91 2.98 L 13.00 6.89 L 18.27 4.81 L 16.93 10.31 L 21.36 13.83 L 15.92 15.42 L 15.09 21.02 L 11.00 17.11 L 5.73 19.19 L 7.07 13.69 Z"
      }
    ]
  ]
};

export const MoleculoRhyme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.64 10.17 L 8.08 8.58 L 8.91 2.98 L 13.00 6.89 L 18.27 4.81 L 16.93 10.31 L 21.36 13.83 L 15.92 15.42 L 15.09 21.02 L 11.00 17.11 L 5.73 19.19 L 7.07 13.69 Z" />
      {children}
    </svg>
  );
});

export default MoleculoRhyme;

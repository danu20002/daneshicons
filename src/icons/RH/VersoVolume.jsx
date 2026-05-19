import React from 'react';

export const iconData = {
  "id": "VersoVolume",
  "name": "VersoVolume",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.40 7.14 L 11.07 3.03 L 18.43 5.68 L 20.96 13.09 L 16.73 19.68 L 8.95 20.49 L 3.46 14.91 Z"
      }
    ]
  ]
};

export const VersoVolume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.40 7.14 L 11.07 3.03 L 18.43 5.68 L 20.96 13.09 L 16.73 19.68 L 8.95 20.49 L 3.46 14.91 Z" />
      {children}
    </svg>
  );
});

export default VersoVolume;

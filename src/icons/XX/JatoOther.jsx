import React from 'react';

export const iconData = {
  "id": "JatoOther",
  "name": "JatoOther",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.91 20.07 L 2.96 12.49 L 7.05 4.42 L 16.09 3.93 L 21.04 11.51 L 16.95 19.58 Z"
      }
    ]
  ]
};

export const JatoOther = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.91 20.07 L 2.96 12.49 L 7.05 4.42 L 16.09 3.93 L 21.04 11.51 L 16.95 19.58 Z" />
      {children}
    </svg>
  );
});

export default JatoOther;

import React from 'react';

export const iconData = {
  "id": "VacuoStudent",
  "name": "VacuoStudent",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.38 6.78 L 20.91 13.53 L 17.22 19.38 L 10.47 20.91 L 4.62 17.22 L 3.09 10.47 L 6.78 4.62 L 13.53 3.09 Z"
      }
    ]
  ]
};

export const VacuoStudent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.38 6.78 L 20.91 13.53 L 17.22 19.38 L 10.47 20.91 L 4.62 17.22 L 3.09 10.47 L 6.78 4.62 L 13.53 3.09 Z" />
      {children}
    </svg>
  );
});

export default VacuoStudent;

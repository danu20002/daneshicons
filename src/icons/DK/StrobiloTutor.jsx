import React from 'react';

export const iconData = {
  "id": "StrobiloTutor",
  "name": "StrobiloTutor",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.21 3.60 L 20.40 9.21 L 14.79 20.40 L 3.60 14.79 Z"
      }
    ]
  ]
};

export const StrobiloTutor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.21 3.60 L 20.40 9.21 L 14.79 20.40 L 3.60 14.79 Z" />
      {children}
    </svg>
  );
});

export default StrobiloTutor;

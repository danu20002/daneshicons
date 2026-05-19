import React from 'react';

export const iconData = {
  "id": "VellicoVolunteer",
  "name": "VellicoVolunteer",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.49 21.14 L 2.86 9.49 L 14.51 2.86 L 21.14 14.51 Z"
      }
    ]
  ]
};

export const VellicoVolunteer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.49 21.14 L 2.86 9.49 L 14.51 2.86 L 21.14 14.51 Z" />
      {children}
    </svg>
  );
});

export default VellicoVolunteer;

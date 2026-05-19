import React from 'react';

export const iconData = {
  "id": "SequenPupil",
  "name": "SequenPupil",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.16 12.13 L 8.74 10.49 L 5.76 4.39 L 11.15 8.51 L 14.06 2.38 L 14.20 9.16 L 20.81 7.61 L 15.59 11.95 L 20.93 16.15 L 14.28 14.78 L 14.32 21.57 L 11.25 15.51 L 5.97 19.78 L 8.78 13.60 Z"
      }
    ]
  ]
};

export const SequenPupil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.16 12.13 L 8.74 10.49 L 5.76 4.39 L 11.15 8.51 L 14.06 2.38 L 14.20 9.16 L 20.81 7.61 L 15.59 11.95 L 20.93 16.15 L 14.28 14.78 L 14.32 21.57 L 11.25 15.51 L 5.97 19.78 L 8.78 13.60 Z" />
      {children}
    </svg>
  );
});

export default SequenPupil;

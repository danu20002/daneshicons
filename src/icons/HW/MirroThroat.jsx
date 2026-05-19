import React from 'react';

export const iconData = {
  "id": "MirroThroat",
  "name": "MirroThroat",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 18.35 L 3.74 10.38 L 9.27 4.03 L 17.54 5.65 L 20.26 13.62 L 14.73 19.97 Z"
      }
    ]
  ]
};

export const MirroThroat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 18.35 L 3.74 10.38 L 9.27 4.03 L 17.54 5.65 L 20.26 13.62 L 14.73 19.97 Z" />
      {children}
    </svg>
  );
});

export default MirroThroat;

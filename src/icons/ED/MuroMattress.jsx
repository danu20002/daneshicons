import React from 'react';

export const iconData = {
  "id": "MuroMattress",
  "name": "MuroMattress",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.97 21.06 L 6.77 19.97 L 2.51 12.88 L 5.40 5.13 L 13.26 2.55 L 20.17 7.09 L 20.93 15.33 Z"
      }
    ]
  ]
};

export const MuroMattress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.97 21.06 L 6.77 19.97 L 2.51 12.88 L 5.40 5.13 L 13.26 2.55 L 20.17 7.09 L 20.93 15.33 Z" />
      {children}
    </svg>
  );
});

export default MuroMattress;

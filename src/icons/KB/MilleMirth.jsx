import React from 'react';

export const iconData = {
  "id": "MilleMirth",
  "name": "MilleMirth",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.65 2.61 L 19.81 6.53 L 21.39 13.65 L 17.47 19.81 L 10.35 21.39 L 4.19 17.47 L 2.61 10.35 L 6.53 4.19 Z"
      }
    ]
  ]
};

export const MilleMirth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.65 2.61 L 19.81 6.53 L 21.39 13.65 L 17.47 19.81 L 10.35 21.39 L 4.19 17.47 L 2.61 10.35 L 6.53 4.19 Z" />
      {children}
    </svg>
  );
});

export default MilleMirth;

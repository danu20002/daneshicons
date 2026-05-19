import React from 'react';

export const iconData = {
  "id": "TubuloSalmon",
  "name": "TubuloSalmon",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.06 2.94 L 17.88 4.06 L 21.82 13.12 L 15.94 21.06 L 6.12 19.94 L 2.18 10.88 Z"
      }
    ]
  ]
};

export const TubuloSalmon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.06 2.94 L 17.88 4.06 L 21.82 13.12 L 15.94 21.06 L 6.12 19.94 L 2.18 10.88 Z" />
      {children}
    </svg>
  );
});

export default TubuloSalmon;

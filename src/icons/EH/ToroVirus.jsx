import React from 'react';

export const iconData = {
  "id": "ToroVirus",
  "name": "ToroVirus",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.71 21.86 L 9.88 14.23 L 2.23 13.82 L 9.22 10.68 L 7.25 3.27 L 12.40 8.95 L 18.84 4.79 L 15.02 11.44 L 20.97 16.28 L 13.47 14.70 Z"
      }
    ]
  ]
};

export const ToroVirus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.71 21.86 L 9.88 14.23 L 2.23 13.82 L 9.22 10.68 L 7.25 3.27 L 12.40 8.95 L 18.84 4.79 L 15.02 11.44 L 20.97 16.28 L 13.47 14.70 Z" />
      {children}
    </svg>
  );
});

export default ToroVirus;

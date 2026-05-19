import React from 'react';

export const iconData = {
  "id": "TectoKeen",
  "name": "TectoKeen",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.49 14.57 Q 15.29 6.37 3.48 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 16.89 L 14.95 5.67 L 16.86 18.05 L 2.21 20.06 L 18.65 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 13.04 3.99 L 21.02 11.36"
      }
    ],
    [
      "path",
      {
        "d": "M 14.07 7.32 A 4.69 4.27 171 0 1 17.49 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 12.92 2.76 A 5.27 4.38 120 0 1 2.32 11.42"
      }
    ]
  ]
};

export const TectoKeen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.49 14.57 Q 15.29 6.37 3.48 17.12" />
      <path d="M 6.36 16.89 L 14.95 5.67 L 16.86 18.05 L 2.21 20.06 L 18.65 19.42" />
      <path d="M 13.04 3.99 L 21.02 11.36" />
      <path d="M 14.07 7.32 A 4.69 4.27 171 0 1 17.49 20.69" />
      <path d="M 12.92 2.76 A 5.27 4.38 120 0 1 2.32 11.42" />
      {children}
    </svg>
  );
});

export default TectoKeen;

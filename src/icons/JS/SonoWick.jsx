import React from 'react';

export const iconData = {
  "id": "SonoWick",
  "name": "SonoWick",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.86 19.93 Q 14.98 18.81 20.96 2.49"
      }
    ],
    [
      "path",
      {
        "d": "M 12.37 14.50 Q 12.67 19.64 18.29 2.07"
      }
    ],
    [
      "path",
      {
        "d": "M 9.68 6.35 Q 14.79 13.36 10.61 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 2.26 11.63 L 9.49 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 8.50 Q 17.33 15.76 17.10 3.47"
      }
    ]
  ]
};

export const SonoWick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.86 19.93 Q 14.98 18.81 20.96 2.49" />
      <path d="M 12.37 14.50 Q 12.67 19.64 18.29 2.07" />
      <path d="M 9.68 6.35 Q 14.79 13.36 10.61 21.02" />
      <path d="M 2.26 11.63 L 9.49 17.93" />
      <path d="M 20.89 8.50 Q 17.33 15.76 17.10 3.47" />
      {children}
    </svg>
  );
});

export default SonoWick;

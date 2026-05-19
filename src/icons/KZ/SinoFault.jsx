import React from 'react';

export const iconData = {
  "id": "SinoFault",
  "name": "SinoFault",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.26 8.77 C 15.42 19.12, 11.87 18.96, 18.00 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 4.25 C 4.36 6.41, 14.24 15.81, 17.02 15.07"
      }
    ],
    [
      "path",
      {
        "d": "M 8.64 3.11 C 9.27 7.06, 4.51 8.61, 19.29 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 2.33 7.83 C 19.92 9.02, 13.98 4.63, 17.15 17.73"
      }
    ]
  ]
};

export const SinoFault = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.26 8.77 C 15.42 19.12, 11.87 18.96, 18.00 19.52" />
      <path d="M 5.96 4.25 C 4.36 6.41, 14.24 15.81, 17.02 15.07" />
      <path d="M 8.64 3.11 C 9.27 7.06, 4.51 8.61, 19.29 21.97" />
      <path d="M 2.33 7.83 C 19.92 9.02, 13.98 4.63, 17.15 17.73" />
      {children}
    </svg>
  );
});

export default SinoFault;

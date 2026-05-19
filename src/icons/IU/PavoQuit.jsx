import React from 'react';

export const iconData = {
  "id": "PavoQuit",
  "name": "PavoQuit",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.03 9.33 C 12.09 12.70, 7.23 19.69, 21.08 21.61"
      }
    ],
    [
      "path",
      {
        "d": "M 2.44 7.32 C 7.38 10.63, 17.30 4.49, 14.82 15.34"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 9.88 C 5.84 15.16, 11.19 8.34, 14.96 18.82"
      }
    ],
    [
      "path",
      {
        "d": "M 9.99 6.81 C 10.55 7.47, 8.32 16.71, 17.26 14.46"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 5.32 C 4.25 16.60, 5.89 14.55, 19.91 20.55"
      }
    ]
  ]
};

export const PavoQuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.03 9.33 C 12.09 12.70, 7.23 19.69, 21.08 21.61" />
      <path d="M 2.44 7.32 C 7.38 10.63, 17.30 4.49, 14.82 15.34" />
      <path d="M 5.73 9.88 C 5.84 15.16, 11.19 8.34, 14.96 18.82" />
      <path d="M 9.99 6.81 C 10.55 7.47, 8.32 16.71, 17.26 14.46" />
      <path d="M 3.52 5.32 C 4.25 16.60, 5.89 14.55, 19.91 20.55" />
      {children}
    </svg>
  );
});

export default PavoQuit;

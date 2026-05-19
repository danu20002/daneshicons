import React from 'react';

export const iconData = {
  "id": "UbiquiRaw",
  "name": "UbiquiRaw",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.25 4.70 C 10.49 11.26, 17.07 12.71, 19.00 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 9.38 C 14.51 7.24, 9.11 5.86, 19.00 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 8.34 5.89 C 4.79 8.76, 8.32 8.66, 20.96 16.43"
      }
    ],
    [
      "path",
      {
        "d": "M 2.16 3.62 C 16.31 11.60, 18.93 16.77, 16.39 15.98"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 7.60 C 14.69 18.16, 6.27 19.88, 15.61 21.43"
      }
    ]
  ]
};

export const UbiquiRaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.25 4.70 C 10.49 11.26, 17.07 12.71, 19.00 19.82" />
      <path d="M 5.27 9.38 C 14.51 7.24, 9.11 5.86, 19.00 20.10" />
      <path d="M 8.34 5.89 C 4.79 8.76, 8.32 8.66, 20.96 16.43" />
      <path d="M 2.16 3.62 C 16.31 11.60, 18.93 16.77, 16.39 15.98" />
      <path d="M 3.14 7.60 C 14.69 18.16, 6.27 19.88, 15.61 21.43" />
      {children}
    </svg>
  );
});

export default UbiquiRaw;

import React from 'react';

export const iconData = {
  "id": "RivoPrologue",
  "name": "RivoPrologue",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.31 9.82 L 11.35 15.22 L 13.29 16.34 L 2.29 20.33 L 17.01 13.08 L 9.14 2.08 L 9.60 19.88 L 12.29 8.58"
      }
    ],
    [
      "path",
      {
        "d": "M 8.98 6.33 C 15.70 13.49, 4.22 15.15, 17.26 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 17.91 L 21.01 19.81 L 7.22 12.95 L 19.04 5.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.99 9.61 L 3.80 11.68 L 8.73 4.38 L 8.89 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.54 10.95 C 9.93 14.38, 11.27 8.94, 14.42 7.42"
      }
    ]
  ]
};

export const RivoPrologue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.31 9.82 L 11.35 15.22 L 13.29 16.34 L 2.29 20.33 L 17.01 13.08 L 9.14 2.08 L 9.60 19.88 L 12.29 8.58" />
      <path d="M 8.98 6.33 C 15.70 13.49, 4.22 15.15, 17.26 18.35" />
      <path d="M 9.35 17.91 L 21.01 19.81 L 7.22 12.95 L 19.04 5.98" />
      <path d="M 6.99 9.61 L 3.80 11.68 L 8.73 4.38 L 8.89 20.04" />
      <path d="M 16.54 10.95 C 9.93 14.38, 11.27 8.94, 14.42 7.42" />
      {children}
    </svg>
  );
});

export default RivoPrologue;

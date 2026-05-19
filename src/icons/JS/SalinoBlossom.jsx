import React from 'react';

export const iconData = {
  "id": "SalinoBlossom",
  "name": "SalinoBlossom",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.63 14.57 L 18.11 18.98 L 3.06 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 19.51 C 8.62 21.23, 4.36 8.63, 9.91 19.36"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 20.80 C 6.51 13.52, 15.76 6.49, 11.75 9.21"
      }
    ]
  ]
};

export const SalinoBlossom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.63 14.57 L 18.11 18.98 L 3.06 20.32" />
      <path d="M 3.13 19.51 C 8.62 21.23, 4.36 8.63, 9.91 19.36" />
      <path d="M 18.66 20.80 C 6.51 13.52, 15.76 6.49, 11.75 9.21" />
      {children}
    </svg>
  );
});

export default SalinoBlossom;

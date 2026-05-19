import React from 'react';

export const iconData = {
  "id": "NucleoLiquor",
  "name": "NucleoLiquor",
  "category": "CO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.14 12.00 a 9.86 9.86 0 1 0 19.71 0 a 9.86 9.86 0 1 0 -19.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 6.09 a 7.88 2.3652991172298785 0 1 0 15.77 0 a 7.88 2.3652991172298785 0 1 0 -15.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.34 10.03 a 9.66 2.8968879631343465 0 1 0 19.31 0 a 9.66 2.8968879631343465 0 1 0 -19.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.34 13.97 a 9.66 2.8968879631343465 0 1 0 19.31 0 a 9.66 2.8968879631343465 0 1 0 -19.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 17.91 a 7.88 2.365299117229879 0 1 0 15.77 0 a 7.88 2.365299117229879 0 1 0 -15.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.14 A 2 2 0 0 0 12.00 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.14 A 2 2 0 0 1 12.00 21.86"
      }
    ]
  ]
};

export const NucleoLiquor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.14 12.00 a 9.86 9.86 0 1 0 19.71 0 a 9.86 9.86 0 1 0 -19.71 0" />
      <path d="M 4.12 6.09 a 7.88 2.3652991172298785 0 1 0 15.77 0 a 7.88 2.3652991172298785 0 1 0 -15.77 0" />
      <path d="M 2.34 10.03 a 9.66 2.8968879631343465 0 1 0 19.31 0 a 9.66 2.8968879631343465 0 1 0 -19.31 0" />
      <path d="M 2.34 13.97 a 9.66 2.8968879631343465 0 1 0 19.31 0 a 9.66 2.8968879631343465 0 1 0 -19.31 0" />
      <path d="M 4.12 17.91 a 7.88 2.365299117229879 0 1 0 15.77 0 a 7.88 2.365299117229879 0 1 0 -15.77 0" />
      <path d="M 12.00 2.14 A 2 2 0 0 0 12.00 21.86" />
      <path d="M 12.00 2.14 A 2 2 0 0 1 12.00 21.86" />
      {children}
    </svg>
  );
});

export default NucleoLiquor;

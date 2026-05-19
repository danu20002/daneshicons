import React from 'react';

export const iconData = {
  "id": "SarcoSuccumb",
  "name": "SarcoSuccumb",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.47 12.00 a 7.53 7.53 0 1 0 15.06 0 a 7.53 7.53 0 1 0 -15.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 12.00 a 4.85 4.85 0 1 1 9.69 0 a 4.85 4.85 0 1 1 -9.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 12.00 L 21.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.97 16.97 L 18.38 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.03 L 12.00 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 16.97 L 5.62 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 12.00 L 2.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 7.03 L 5.62 5.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.97 L 12.00 2.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.97 7.03 L 18.38 5.62"
      }
    ]
  ]
};

export const SarcoSuccumb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.47 12.00 a 7.53 7.53 0 1 0 15.06 0 a 7.53 7.53 0 1 0 -15.06 0" />
      <path d="M 7.15 12.00 a 4.85 4.85 0 1 1 9.69 0 a 4.85 4.85 0 1 1 -9.69 0" />
      <path d="M 19.03 12.00 L 21.03 12.00" />
      <path d="M 16.97 16.97 L 18.38 18.38" />
      <path d="M 12.00 19.03 L 12.00 21.03" />
      <path d="M 7.03 16.97 L 5.62 18.38" />
      <path d="M 4.97 12.00 L 2.97 12.00" />
      <path d="M 7.03 7.03 L 5.62 5.62" />
      <path d="M 12.00 4.97 L 12.00 2.97" />
      <path d="M 16.97 7.03 L 18.38 5.62" />
      {children}
    </svg>
  );
});

export default SarcoSuccumb;

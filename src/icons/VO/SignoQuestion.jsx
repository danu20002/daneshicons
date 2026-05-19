import React from 'react';

export const iconData = {
  "id": "SignoQuestion",
  "name": "SignoQuestion",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.68 12.00 a 9.32 9.32 0 1 0 18.63 0 a 9.32 9.32 0 1 0 -18.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 8.89 a 8.78 2.6350210101259806 0 1 0 17.57 0 a 8.78 2.6350210101259806 0 1 0 -17.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 15.11 a 8.78 2.6350210101259814 0 1 0 17.57 0 a 8.78 2.6350210101259814 0 1 0 -17.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.68 A 2 2 0 0 0 12.00 21.32"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.68 A 2 2 0 0 1 12.00 21.32"
      }
    ]
  ]
};

export const SignoQuestion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.68 12.00 a 9.32 9.32 0 1 0 18.63 0 a 9.32 9.32 0 1 0 -18.63 0" />
      <path d="M 3.22 8.89 a 8.78 2.6350210101259806 0 1 0 17.57 0 a 8.78 2.6350210101259806 0 1 0 -17.57 0" />
      <path d="M 3.22 15.11 a 8.78 2.6350210101259814 0 1 0 17.57 0 a 8.78 2.6350210101259814 0 1 0 -17.57 0" />
      <path d="M 12.00 2.68 A 2 2 0 0 0 12.00 21.32" />
      <path d="M 12.00 2.68 A 2 2 0 0 1 12.00 21.32" />
      {children}
    </svg>
  );
});

export default SignoQuestion;

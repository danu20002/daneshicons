import React from 'react';

export const iconData = {
  "id": "TrattoMotto",
  "name": "TrattoMotto",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.50 9.10 L 11.77 8.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.50 9.10 L 13.36 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 20.93 L 11.77 8.53"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 20.93 L 13.36 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 14.52 L 13.36 18.10"
      }
    ],
    [
      "circle",
      {
        "cx": "12.50",
        "cy": "9.10",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.25",
        "cy": "20.93",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.77",
        "cy": "8.53",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.37",
        "cy": "14.52",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.36",
        "cy": "18.10",
        "r": "1.5"
      }
    ]
  ]
};

export const TrattoMotto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.50 9.10 L 11.77 8.53" />
      <path d="M 12.50 9.10 L 13.36 18.10" />
      <path d="M 6.25 20.93 L 11.77 8.53" />
      <path d="M 6.25 20.93 L 13.36 18.10" />
      <path d="M 20.37 14.52 L 13.36 18.10" />
      <circle cx="12.50" cy="9.10" r="1.5" />
      <circle cx="6.25" cy="20.93" r="1.5" />
      <circle cx="11.77" cy="8.53" r="1.5" />
      <circle cx="20.37" cy="14.52" r="1.5" />
      <circle cx="13.36" cy="18.10" r="1.5" />
      {children}
    </svg>
  );
});

export default TrattoMotto;

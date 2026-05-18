import React from 'react';

export const iconData = {
  id: "LocateOff",
  name: "LocateOff",
  category: "L",
  nodes: [["path",{"d":"M12 19v3"}],["path",{"d":"M12 2v3"}],["path",{"d":"M18.89 13.24a7 7 0 0 0-8.13-8.13"}],["path",{"d":"M19 12h3"}],["path",{"d":"M2 12h3"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M7.05 7.05a7 7 0 0 0 9.9 9.9"}]]
};

export const LocateOff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 19v3" />
      <path d="M12 2v3" />
      <path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" />
      <path d="M19 12h3" />
      <path d="M2 12h3" />
      <path d="m2 2 20 20" />
      <path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />
      {children}
    </svg>
  );
});

export default LocateOff;

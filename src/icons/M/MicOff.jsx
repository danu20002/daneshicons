import React from 'react';

export const iconData = {
  id: "MicOff",
  name: "MicOff",
  category: "M",
  nodes: [["path",{"d":"M12 19v3"}],["path",{"d":"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{"d":"M16.95 16.95A7 7 0 0 1 5 12v-2"}],["path",{"d":"M18.89 13.23A7 7 0 0 0 19 12v-2"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M9 9v3a3 3 0 0 0 5.12 2.12"}]]
};

export const MicOff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
      <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" />
      <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" />
      <path d="m2 2 20 20" />
      <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
      {children}
    </svg>
  );
});

export default MicOff;

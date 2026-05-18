import React from 'react';

export const iconData = {
  id: "UserRoundKey",
  name: "UserRoundKey",
  category: "U",
  nodes: [["path",{"d":"M19 11v6"}],["path",{"d":"M19 13h2"}],["path",{"d":"M2 21a8 8 0 0 1 12.868-6.349"}],["circle",{"cx":"10","cy":"8","r":"5"}],["circle",{"cx":"19","cy":"19","r":"2"}]]
};

export const UserRoundKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M19 11v6" />
      <path d="M19 13h2" />
      <path d="M2 21a8 8 0 0 1 12.868-6.349" />
      <circle cx="10" cy="8" r="5" />
      <circle cx="19" cy="19" r="2" />
      {children}
    </svg>
  );
});

export default UserRoundKey;

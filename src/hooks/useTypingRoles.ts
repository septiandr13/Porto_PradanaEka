import { useEffect, useState } from "react";

export function useTypingRoles(roles: string[]) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const typingSpeed = deleting ? 60 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (displayed.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayed(current.slice(0, displayed.length - 1));
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [deleting, displayed, roleIndex, roles]);

  return displayed;
}


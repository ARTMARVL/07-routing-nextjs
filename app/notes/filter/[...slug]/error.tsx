'use client';
import css from "../../../../components/Error/ErrorMessage.module.css";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <p className={css.text}>
      An unexpected error occurred. {error.message}
    </p>
  );
}
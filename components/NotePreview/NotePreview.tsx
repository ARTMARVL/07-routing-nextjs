"use client";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import ErrorMessage from "../Error/ErrorMessage";

type NotePreviewProps = {
  id: number;
  onClose: () => void;
};

export default function NotePreview({ id, onClose }: NotePreviewProps) {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(Number(id)),
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
  <ErrorMessage 
    message="Something went wrong." 
    onClose={() => {}}  // или другой обработчик
  />
)}
      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note?.title}</h2>
              <button className={css.backBtn} onClick={onClose}>
                Go back
              </button>
            </div>
            <p className={css.content}>{note?.content}</p>
            <p className={css.date}>{note?.createdAt}</p>
          </div>
        </div>
      )}
    </>
  );
}
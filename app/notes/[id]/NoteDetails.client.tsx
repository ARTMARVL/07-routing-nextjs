"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./NoteDetails.module.css";
import { fetchNoteById } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/Error/ErrorMessage";

export default function NoteDetailsClient() {
  const { id } = useParams();

  const router = useRouter();

  const back = () => router.back();

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
      {isError && <ErrorMessage message="An unexpected error occurred." />}
      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note?.title}</h2>
              <button className={css.backBtn} onClick={back}>
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
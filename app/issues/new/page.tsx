"use client";

import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

const IssueForm = dynamic(() => import("@/app/issues/_components/issueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton/>
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;

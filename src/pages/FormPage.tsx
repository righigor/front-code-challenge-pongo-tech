import React from "react";
import Form from "../components/Form";
import { FormType } from "../types/form";

type FormPageProps = {
  setSessions: React.Dispatch<React.SetStateAction<FormType[]>>;
};

function FormPage({ setSessions }: FormPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 space-y-6">
      <h1 className="text-3xl font-bold">Create a new Game Session</h1>
      <Form setSessions={setSessions} />
    </div>
  );
}

export default FormPage;

import Form from "../components/Form";

function FormPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 space-y-6">
      <h1 className="text-3xl font-bold">Create a new Game Session</h1>
      <Form />
    </div>
  );
}

export default FormPage;

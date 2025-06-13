import EditForm from "./edit-form";

const EditPageById = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <EditForm id={id} />;
};

export default EditPageById;

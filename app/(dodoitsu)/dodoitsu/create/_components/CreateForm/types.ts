export type CreateFormTypes = {
  content: string;
  description?: string;
};

export type Props = {
  restoreData: Partial<CreateFormTypes>;
  onSubmit: (values: CreateFormTypes) => void;
};

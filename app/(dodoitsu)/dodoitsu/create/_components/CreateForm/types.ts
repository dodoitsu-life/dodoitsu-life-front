export type CreateFormTypes = {
  content: string;
  description?: string;
};

export type Props = {
  onSubmit: (values: CreateFormTypes) => void;
};

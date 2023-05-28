export type CreateFormTypes = {
  content: string;
  comment?: string;
};

export type Props = {
  onSubmit: (values: CreateFormTypes) => void;
};

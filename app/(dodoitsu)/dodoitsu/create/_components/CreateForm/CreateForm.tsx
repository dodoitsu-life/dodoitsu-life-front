"use client";

import { useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Props, CreateFormTypes } from "./types";
import {
  DESCRIPTION_MAX_LENGTH,
  DESCRIPTION_MAX_LENGTH_MESSAGE,
  CONTENT_MAX_LENGTH,
  CONTENT_MAX_LENGTH_MESSAGE,
  CONTENT_REQUIRED_MESSAGE,
} from "./constants";

export const CreateForm = (props: Props) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateFormTypes>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<CreateFormTypes> = (data: CreateFormTypes) => {
    props.onSubmit(data);
  };

  // props.restoreDataが変更されたら、フォームの値を更新する
  useEffect(() => {
    if (props.restoreData.content)
      setValue("content", props.restoreData.content);

    if (props.restoreData.description)
      setValue("description", props.restoreData.description);
  }, [props.restoreData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl">
      <div className="md:flex mb-5">
        <div className="md:w-1/5">
          <label
            className="block text-gray-500 font-bold md:text-right mt-2 mb-1 md:mb-0 pr-4"
            htmlFor="content"
          >
            都々逸
            <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="md:w-4/5">
          <input
            id="content"
            type="text"
            placeholder="立てば芍薬 座れば牡丹 歩く姿は百合の花"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("content", {
              required: {
                value: true,
                message: CONTENT_REQUIRED_MESSAGE,
              },
              maxLength: {
                value: CONTENT_MAX_LENGTH,
                message: CONTENT_MAX_LENGTH_MESSAGE,
              },
            })}
          />
          {errors.content && (
            <span className="text-red-500 text-sm px-4">
              {errors.content.message}
            </span>
          )}
        </div>
      </div>

      <div className="md:flex">
        <div className="md:w-1/5">
          <label
            className="block text-gray-500 font-bold md:text-right mt-1 mb-1 md:mb-0 pr-4"
            htmlFor="content"
          >
            作者コメント
          </label>
        </div>
        <div className="md:w-4/5">
          <textarea
            id="description"
            placeholder="作者コメントを入力してください（任意）"
            rows={5}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("description", {
              maxLength: {
                value: DESCRIPTION_MAX_LENGTH,
                message: DESCRIPTION_MAX_LENGTH_MESSAGE,
              },
            })}
          />
          {errors.description && (
            <span className="text-red-500 text-sm px-4">
              {errors.description.message}
            </span>
          )}
        </div>
      </div>

      <div className="md:flex md:items-center md:justify-end mt-8">
        <div className="md:w-4/5">
          <input
            type="submit"
            className={
              isValid
                ? "inline-flex items-center justify-center px-3 py-1 text-lg font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark cursor-pointer"
                : "inline-flex items-center justify-center px-3 py-1 text-lg font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm cursor-not-allowed opacity-50"
            }
            disabled={!isValid}
            value="確認画面へ"
          />
        </div>
      </div>
    </form>
  );
};

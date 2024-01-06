/**
 * SCHEDULED 受付開始前
 * ACTIVE    投稿受付中
 * CLOSED    投稿受付終了
 */
export enum Status {
  SCHEDULED = "SCHEDULED",
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: Status;
}

import moment from "moment";

export const getDatesProgress = (
    start_date: string | null,
    end_date: string | null,
  ): number => {
    if (!start_date || !end_date) return 0;
    let start = moment(start_date).toDate().getTime();
    let end = moment(end_date).toDate().getTime();
    const today = new Date().getTime();
  
    if (start > end) [start, end] = [end, start];
  
    const result = Math.round(((today - start) / (end - start)) * 100);
    if (result > 100) return 100;
    if (result <= 0) return 0;
    return result;
  };
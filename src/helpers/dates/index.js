import DateNormalized from "./DateNormalized"

export const Normalize = (dateStr = '') =>
{
    var date =  new DateNormalized(dateStr);
   
    return date;
}




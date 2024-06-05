export default function DateFormatZh(props: any) {
  const date = props.date;

  // Define an array of month abbreviations
  const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      
  // Convert the array to a Date object - adjust for 0-based month index
  const dateObj = new Date(date[0], date[1] - 1, date[2]);
  // --------------------- year --- month ------ day
  // In the following gethMoth() function, we obtain Jan as the 0th month.

  // Extract the components of the date
  const day = dateObj.getDate();
  // const month = months[dateObj.getMonth()];
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const output = `${year}年${month}月${day}日`

  // Format the date as "Month Day, Year"
  return (<>{output}</>);
}
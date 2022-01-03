const now = new Date();
export const getFullDate=()=>{
    return now.getFullYear()+"년 "+(now.getMonth()+1)+"월 "+now.getDate()+"일";
}
export const getToday=()=>{
    const days="일월화수목금토";
    return days[now.getDay()]+"요일";
}
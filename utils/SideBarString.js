export default function SideBarString(s){
    if(s.length > 30) s = s.slice(0,30) + "...";
    return s;
}
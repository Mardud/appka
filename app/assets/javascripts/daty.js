
var good_date = []
var today = new Date();

switch(today.getDay())
{
    case 1:
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+0) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+3) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+4) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+5) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+6) )
    break;
    case 2:
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+0) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+3) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+4) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+5) )
    break;
    case 3:
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+0) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+3) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+4) )
    break;
    case 4:
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-3) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+0) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+3) )
    break;
    case 5:
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-4) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-3) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+0) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+2) )
    break;
    case 6:
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-5) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-4) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-3) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+0) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+1) )
    break;
    case 0:
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-6) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-5) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-4) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-3) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-2) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()-1) )
    good_date.push(today.getFullYear() + "-" +'0'+ (today.getMonth()+1) + "-" +(today.getDate()+0) )
    break;
    }
/**
 * Created by kanaran on 18.02.14.
 */

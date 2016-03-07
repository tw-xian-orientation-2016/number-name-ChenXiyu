function cutTo3( number ){
    var Three_Digits = [];
    
    head = number.substr(0,(number.length%3))
    tail = number.substr((number.length%3))

    if( head != "" ){
        Three_Digits.push(head)
    }
    if( tail != ""){
        T_str = tail.match(/.{1,3}/g);
        for(var i = 0 ; i < T_str.length ; i++){
            Three_Digits.push(T_str[i])
        }
    }
    return Three_Digits
}

function translater(Three_Digits){
    var spelledPart = []
    for( var i = 0 ; i < Three_Digits.length ; i++){
        spelledPart.push(spell3Digits(Three_Digits[i]))
    }
    return spelledPart;
}

function spell3Digits(n){
    var dic = {
        '0':'',
        '1':'one',
        '2':'two',
        '3':'three',
        '4':'four',
        '5':'five',
        '6':'six',
        '7':'seven',
        '8':'eight',
        '9':'nine',
        '10':'ten',
        '11':'eleven',
        '12':'twelve',
        '13':'thirteen',
        '14':'fourteen',
        '15':'fifteen',
        '16':'sixteen',
        '17':'seventeen',
        '18':'eighteen',
        '19':'nineteen',
        '20':'twenty',
        '30':'thirty',
        '40':'forty',
        '50':'fifty',
        '60':'sixty',
        '70':'seventy',
        '80':'eighty',
        '90':'ninety'
    };
    n = Number(n)+"";

    var tail , head;
    tail = n.substr(-2,2);
    var decade = spellDecade(tail , dic);
    if(n.length == 3){
        head = n.substr(-3,1);
        if(decade != ""){
            if(dic[head] != ''){
                return dic[head] + " hundred and " + decade
            }
        }else{
            return dic[head] + " hundred"
        }
    }else{
        return  decade
    }
}

function spellDecade( n , dic){
    if(dic[n] != undefined){
        return dic[n]; 
    }else{
        var unit = Number(n)%10 + "";
        var decade = (Number(n) - Number(n)%10) + "";
        if ( Number(decade) == 0){
            return dic[unit];
        }else{
            return dic[decade] + " " + dic[unit];
        }
    }
}

function splice(spelledPart){
    var result = "";
    var dic= ['trillion','billion','million','thousand',''];
    var dicLength = dic.length;
    for(var i = spelledPart.length - 1 , j = dic.length -1 ; i >= 0 && j >= 0 ;i-- , j--){
        if(spelledPart[i] != ''){
            if(spelledPart[i].indexOf(" and") != -1 ){
                if(i > 0){
                    result = ","+spelledPart[i] + " " + dic[j] + result;
                }else{
                    result = spelledPart[i] + " " +dic[j] + result;
                }
            }else{
                if(i > 0){
                    result = " and " + spelledPart[i] + " " +dic[j] + result;
                }else{
                    result = spelledPart[i] + " " +dic[j] + result;
                }
            }
        }
    }
    return result;
}

function main(input){
    return splice(translater(cutTo3(input)))
}

export function convertNumber(phoneNumber){
    let result;

    if (/^8/.test(phoneNumber)){
        result = phoneNumber.match(/\d/g);
        result[0] = 7;
        return '+' + result.join('');
    }else if (/^\+/.test(phoneNumber)){
        result = phoneNumber.match(/\d/g);
        return '+' + result.join('');
    }else{throw new Error('uncorrectable phone number')}
}

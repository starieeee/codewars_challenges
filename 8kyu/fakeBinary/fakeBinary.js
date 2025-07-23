function fakeBin(x){
    return x.toString().split('').map(num => (num < '5' ? '0' : '1')).join('');
}